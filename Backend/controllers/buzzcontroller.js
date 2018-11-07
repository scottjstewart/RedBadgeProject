let express = require('express');
let db = require('../db')
let buzz = db.sequelize.import('../models/buzz')
let user = db.users
let validateSession = require('../middleware/validate-session')


module.exports = (app, db) => {
  app.get('/buzz/user', (req, res) => {
    db.users.findAll({
      include: [
        {
          model: db.buzzs,
          include: [
            {
              model: db.comment
            }
          ]
        }
      ]
    }).then(users => {
      const resObj = users.map(user => {

        //tidy up the user data
        return Object.assign(
          {},
          {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: bcrypt.hashSync(user.password, 10),
            userName: user.userName,
            pet: user.pet,
            upVote: user.upVote,
            buzzs: user.buzzs.map(post => {

              //tidy up the post data
              return Object.assign(
                {},
                {
                  buzzId: buzz.id,
                  userId: buzz.userId,
                  location: buzz.location,
                  price: buzz.price,
                  funFactor: buzz.funFactor,
                  details: buzz.details,
                  comments: buzz.comments.map(comment => {

                    //tidy up the comment data
                    return Object.assign(
                      {},
                      {
                        commentId: comment.id,
                        userId: comment.userId,
                        commenter: comment.commenterUserName,
                      }
                    )
                  })
                }
              )
            })
          }
        )
      });
      res.json(resObj)
    });
  });
  app.get('/buzz/get', (req, res) => {
    buzz.findAll()
      .then(buzz => res.status(200).json(buzz))
      .catch(err => res.status(500).json({ error: err }))
  })

  app.get('/buzz/own', (req, res) => {
    buzz.findAll({ where: { owner: req.user.id } })
      .then(buzz => res.status(200).json(buzz))
      .catch(err => res.status(500).json({ error: err }))
  })

  app.post('/buzz/makeBuzz', validateSession, (req, res) => {
    buzz.create({
      userId: req.user.id,
      location: req.body.location,
      price: req.body.price,
      funFactor: req.body.funFactor,
      details: req.body.details,
    }).then(
      function createSuccess(buzz) {
        res.json({
          buzz: buzz,
          message: 'it worked',

        })
      },
      function createError(err) {
        res.send(500, err.message)
      }
    )
  })

  app.put('/buzz/update/:id', validateSession, (req, res) => {
    buzz.findOne({ where: { id: req.params.id } }).then(buzz => {
      if (buzz.userId === req.user.id) {
        buzz.update(req.body, { where: { id: req.params.id } })
          .then(buzz => res.status(200).json(buzz))
          .catch(err => res.json(req.error))
      } else {
        res.status(500).json({
          message: `User does not own ${req.params.id}`
        })
      }
    })
  })
  app.delete('/buzz/delete/:id', (req, res) => {
    buzz.findOne({ where: { id: req.params.id } }).then(buzz => {
      if (buzz.userId === req.user.id) {
        Buzz.destroy({ where: { id: req.params.id } })
          .then(buzz => res.status(200).json(buzz))
          .catch(err => res.json(req.error))
      } else {
        res.status(500).json({
          message: `C'mon man! don't delete other peoples stuff!`
        })
      }
    })
  })

  app.post('/buzz/:buzz/comment/:userid', (req, res) => {

  })

}
