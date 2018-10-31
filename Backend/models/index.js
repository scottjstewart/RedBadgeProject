// const Sequelize = require('sequelize');


// const sequelize = new Sequelize (process.env.NAME, 'postgres', process.env.PASS, {
//     host: 'localhost',
//     dialect: 'postgres'
// })


// const db = {
//     User: sequelize.import('./usercontroller'),
//     Buzz: sequelize.import('./buzzcontroller'),
//     Client: sequelize.import('./clientcontroller'),
//     }
    
//     Object.keys(db).forEach((modelName) => {
//         if ('associate' in db[modelName]) {
//             db[modelName].associate(db);
//         }
//     })
    
//     db.sequelize = sequelize

// module.exports = sequelize;