require('dotenv').config()

const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize

sequelize.authenticate().then(
    function () {
        console.log('Conected to redbadge database');
    },
    function (err) {
        console.log(err);
    }
);


const user = require('./models/user.js')
const buzz = require('./models/buzz.js')
const comment = require('./models/comment.js')

//user associations
user.hasMany(buzz, { as: 'Buzzes' })
user.hasMany(comment, { as: 'Comment' })

//buzz associations
buzz.hasMany(comment, { as: 'Comments' })
buzz.belongsTo(user, { as: 'Buzzer' })

//comment associations
comment.belongsTo(buzz, { as: 'Buzz' })
comment.belongsTo(user, { as: 'Commenter' })

