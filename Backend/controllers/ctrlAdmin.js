let comment = require("../models/comment");
let buzz = require("../models/buzz")
let user = require("../models/user")
let validateSession = require("../middleware/validate-session");

module.exports = (app, db) => {
    app.get('/admin/users/', validateSession, (req, res) => {
        user.findAndCountAll({
            attributes: [
                'id',
                'userName',
                'firstName',
                'email',
                "pet",
            ],
            include: [
                {
                    model: buzz,
                    as: 'Buzzes',
                    include: [
                        {
                            model: comment,
                            as: 'Comments',
                            include: [
                                {
                                    model: user,
                                    as: 'Commenter',
                                    attributes: ['userName', 'id']
                                }
                            ]
                        },
                        {
                            model: user,
                            as: 'Buzzer',
                            attributes: ['userName', 'id']
                        }
                    ]
                }
            ],
            limit: req.query.pageSize,
            offset: req.query.pageNumber * req.query.pageSize
        })
            .then(
                result => {
                    let users = []
                    result.rows.forEach(
                        usr => {

                            usr.role = usr.pet === 'squirrel' ? 'user' : usr.pet === 'cat' ? 'client' : usr.pet === 'dog' ? 'admin' : 'user'

                            nUsr = {
                                id: usr.id,
                                userName: usr.userName,
                                firstName: usr.firstName,
                                email: usr.email,
                                role: usr.role
                            }
                            users.push(nUsr)
                        }
                    )
                    count = result.count
                    res.status(200).send({ users, count })
                }
            )
    })

    app.get('/admin/user/count', validateSession, (req, res) => {
        user.count().then(count => {
            res.status(200).json({ count: count })
        })
    })

    app.get('/admin/buzzes', validateSession, (req, res) => {
        buzz.findAll({
            limit: req.query.pageSize,
            offset: req.query.pageNumber * req.query.pageSize,
            include: [
                {
                    model: comment,
                    as: 'Comments',
                    include: [
                        {
                            model: user,
                            as: 'Commenter',
                            attributes: ['userName']
                        }
                    ]
                },
                {
                    model: user,
                    as: 'Buzzer',
                    attributes: ['userName']
                }
            ]
        }).then(
            buzzes => {
                res.status(200).send(buzzes)
            }
        )
    })

    app.get('/admin/buzz/count', validateSession, (req, res) => {
        buzz.count().then(count => {
            res.status(200).json({ count: count })
        })
    })
}