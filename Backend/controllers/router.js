
const routes = [
  require('./buzzcontroller'),
  require('./usercontroller'),
  require('./commentcontroller'),
  require('../controllers/ctrlAdmin')
];



module.exports = function router(app, sequelize) {
  return routes.forEach((router) => {
    router(app, sequelize);
  });
};
