let express = require('express');
let router = express.Router();
let sequelize = require('../db')
let Buzz = sequelize.import('../models/buzz')
let User = sequelize.import('../models/user')
let validateSession = require('../middleware/validate-session')
let user = User;


router.get('/', (req, res) => {
    Buzz.findAll()
        .then(buzz => res.status(200).json(buzz))
        .catch(err => res.status(500).json({error: err}))
})

router.get('/own', (req, res) => {
    Buzz.findAll({where: {owner: req.user.id} } )
        .then(buzz => res.status(200).json(buzz))
        .catch(err => res.status(500).json({error: err}))
})

router.get('/get', (req, res) => {
    User.findAll()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({error: err}))
})

router.post('/makeBuzz', (req, res) => {
    Buzz
        .create({
            location: req.body.location,
            price: req.body.price,
            funFactor: req.body.funFactor,
            details: req.body.details,
            owner: req.user.id
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

router.put('/update/:id', (req, res) => {
    Buzz.findOne({where:{id:req.params.id}}).then(buzz=>{
        if(buzz.owner === req.user.id){
            Buzz.update(req.body, {where: {id: req.params.id}})
            .then(buzz => res.status (200).json(buzz))
            .catch(err => res.json(req.error))    
        } else{
            res.status(500).json({
                message: `User does not own ${req.params.id}`
            })
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    Buzz.findOne({where:{id:req.params.id}}).then(buzz=>{
        if(buzz.owner === req.user.id){
            Buzz.destroy({where: {id: req.params.id}})
            .then(buzz => res.status (200).json(buzz))
            .catch(err => res.json(req.error))    
        } else{
            res.status(500).json({
                message: `C'mon man! don't delete other peoples stuff!`
            })
        }
    })
})

module.exports = router