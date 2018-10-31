const Sequelize = require('sequelize')
require('dotenv').config()

let host
let os = require('os')

if (os.hostname().indexOf('local') > -1) {
    host = 'localhost'
} else {
    host = process.env.FOREIGN_HOST
}

const sequelize = new Sequelize(process.env.DBNME, process.env.DBUN, process.env.DBPW, {
    host: 'localhost',
    dialect: 'postgres'
})
sequelize.authenticate().then(
    () => {
        console.log('connectd to webTable database')
    },
    (err) => {
        console.log(err)
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./models/modUser')(sequelize, Sequelize)
db.Character = require('./models/modCharacter')(sequelize, Sequelize)
db.Game = require('./models/modGame')(sequelize, Sequelize)

//associations

//User:Character--1:m
db.User.hasMany(db.Character, { as: 'Units' })
db.Character.belongsTo(db.User, { as: 'Creator' })

//User:Game:Users--1:m:M
db.User.hasMany(db.Game, { as: 'Adventures', onDelete: 'CASCADE' })
db.Game.hasMany(db.User, { as: "Players", onDelete: 'CASCADE' })

//User:Game<->1:1
db.Game.hasOne(db.User, { as: 'Initiator', onDelete: 'CASCADE', through: 'gameMaster' })
db.Game.hasOne(db.User, { as: 'DM', onDelete: 'CASCADE', through: 'gameMaster' })


//User:Game:User--Invites
db.Game.belongsToMany(db.User, { as: 'Venue', through: 'gameInvites', onDelete: 'CASCADE' })
db.User.belongsToMany(db.Game, { as: 'Invites', through: 'gameInvites' })
db.User.belongsToMany(db.User, { as: 'Invitees', through: 'gameInvites' })
db.User.belongsToMany(db.User, { as: 'Inviters', through: 'gameInvites' })

//User:User--Friends
db.User.belongsToMany(db.User, { as: 'friends', onDelete: "CASCADE", through: 'friendList' })

//User:User--Requests
db.User.belongsToMany(db.User, { as: 'Requestees', through: 'friendRequests', onDelete: 'CASCADE' })
db.User.belongsToMany(db.User, { as: "Requesters", through: 'friendRequests', onDelete: 'CASCADE' })
sequelize.sync()

module.exports = sequelize, db

