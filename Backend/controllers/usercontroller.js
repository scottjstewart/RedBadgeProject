const router = require('express').Router()
const User = require('../db').import('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const validatesession = require('../middleware/validate-session')
// const sequelize = require('../db').import('../models/user')

router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        userName: req.body.userName
    })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
                console.log(token)

                res.json({
                    user: user,
                    auth: true,
                    message: 'User successfuly created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err.message)
        )
})
router.post('/login', (req, res) => {
    User.findOne({ where: { userName: req.body.userName } })
        .then(
            user => {
                if (user) {
                    bcrypt.compare(req.body.password, user.password, (err, matches) => {
                        if (matches) {
                            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
                            res.json({
                                user: user,
                                auth: true,
                                message: 'Success!',
                                sessionToken: token
                            })
                        } else {
                            res.status(502).send({ error: 'bad gateway' })
                        }
                    })
                } else {
                    res.status(500).send({ error: 'failed to authenticate' })
                }
            },
            err => res.status(501).send({ error: 'failed to process' })
        )
})

module.exports = router