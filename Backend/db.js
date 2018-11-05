require('dotenv').config()

const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function () {
        console.log('Conected to redbadge database');
    },
    function (err) {
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
db.comments.belongsTo(db.buzzs, { through: 'buzzComments' });
db.comments.belongsTo(db.users);
db.buzzs.belongsToMany(db.comments, { through: 'buzzComments' });
db.buzzs.belongsTo(db.users, { as: 'Buzzer' });
db.users.belongsToMany(db.buzzs, { through: 'userBuzzes' });
db.users.belongsToMany(db.comments, { through: 'buzzComments' });



module.exports = db;