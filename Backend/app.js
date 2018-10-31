const express = require('express');
const app = express();
const User = require('./controllers/usercontroller')
const sequelize = require('./db')
const bodyParser = require('body-parser')
const Buzz = require('./controllers/buzzcontroller')
const Client = require('./controllers/clientcontroller')

// const validatesession = require('../middleware/validate-session')


sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/header'))

app.use('/user', User)


app.use(require('./middleware/validate-session'))

app.use('/buzz', Buzz)

app.use('/client', Client)

app.use('/api/test', function(req, res){
    res.send("Looks like this is working...because we are awesome");
});
            
app.listen(3000, function (){
    console.log('app listening on port 3000')
})