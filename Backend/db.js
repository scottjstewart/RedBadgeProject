require('dotenv').config()

const Sequelize = require('sequelize');


const sequelize = new Sequelize (process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function() {
        console.log('Conected to redbadge database');
    },
    function(err){
        console.log(err);
    }
);

// const db = {}
// db.Sequelize = Sequelize
// db.sequelize = sequelize

// User = require('./models/user')(sequelize, Sequelize)
// Buzz = require('./models/buzz')(sequelize, Sequelize)

// Buzz.belongsTo(User, {foreignKey: 'buzzId'})


module.exports = sequelize;