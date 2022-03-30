const express = require("express");
const path = require('path');
const app = express();
const port = 80;
//Express related stuff
app.use('/static', express.static('static')); // for serving static file

//Pug specific stuff
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the views directory

app.get('/', (req, res) => {
       res.status(200).render('sbi.pug');
});
app.listen(port, () => {
    console.log(`This application started succesfully on port ${port}`);
});

