let db = require('../db')
let comment = db.sequelize.import('../models/comment')
let validateSession = require('../middleware/validate-session')


module.exports = (app, db) => {
    app.get('/user', (req, res) => {
        sequelize.users.findAll({
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
                            buzzId: comment.buzzId,
                            userId: comment.userId,
                            text: comment.text,
                            commenter: comment.commenter
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
  
    app.get('/comment/get', validateSession, (req, res) => {
      comment.findAll()
          .then(comment => res.status(200).json(comment))
          .catch(err => res.status(500).json({error: err}))
  })
  
  app.get('/comment/own', validateSession, (req, res) => {
      comment.findAll({where: {owner: req.user.id} } )
          .then(comment => res.status(200).json(comment))
          .catch(err => res.status(500).json({error: err}))
  })
  
  app.post('/comment/create', validateSession, (req, res) => {
      comment.create({
              // buzzID: req.params.id,
              commenter: req.user.userName,
              userId: req.user.id,
              text: req.body.text,
          }).then(
              function createSuccess(comment) {
                  res.json({
                      comment: comment,
                      message: 'it worked',
                      
                  })
              },
              function createError(err) {
                  res.send(500, err.message)
              }
          )
  })
  
  app.put('/comment/update/:id', validateSession, (req, res) => {
    comment.findOne({where:{id:req.params.id}}).then(comment=>{
        if(comment.userId === req.user.id){
            comment.update(req.body, {where: {id: req.params.id}})
            .then(buzz => res.status (200).json(comment))
            .catch(err => res.json(req.error))    
        } else{
            res.status(500).json({
                message: `User does not own ${req.params.id}`
            })
        }
    })
  })
  app.delete('/comment/delete/:id', validateSession, (req, res) => {
    comment.findOne({where:{id:req.params.id}}).then(comment=>{
        if(comment.userId === req.user.id){
            comment.destroy({where: {id: req.params.id}})
            .then(comment => res.status (200).json(comment))
            .catch(err => res.json(req.error))    
        } else{
            res.status(500).json({
                message: `C'mon man! don't delete other peoples stuff!`
            })
        }
    })
  })
}
