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



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/user.js')(sequelize, Sequelize);
db.comments = require('./models/comment.js')(sequelize, Sequelize);
db.buzzs = require('./models/buzz.js')(sequelize, Sequelize);

//Relations
db.comments.belongsTo(db.buzzs);
db.comments.belongsTo(db.users);
db.buzzs.hasMany(db.comments);
db.buzzs.belongsTo(db.users);
db.users.hasMany(db.buzzs);
db.users.hasMany(db.comments);



module.exports = db;
module.exports = db;