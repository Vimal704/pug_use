const express = require("express");
const path = require('path');
const app = express();
const port = 80;
//Express related stuff
app.use('/static', express.static('static')); // for serving static file

//Pug specific stuff
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the views directory


//Endpoints
// app.get('/', (req, res) => {
//     // const raaka = "If raaka works it means that these are passed as parameters of a function"
//     const statement = "IF this works it will be good"
//     const coned = "Someone may or may not best it always depends"
//     const params = {'title':'Valorent is the best game','content':coned,'state':statement}
//     res.status(200).render('index.pug', params);
// });
app.get('/', (req, res) => {
    // const raaka = "If raaka works it means that these are passed as parameters of a function"
    const params = {'title':'Valorent is the best game'}
    res.status(200).render('sbi.pug', params);
});
app.listen(port, () => {
    console.log(`This application started succesfully on port ${port}`);
});

