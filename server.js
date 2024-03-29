const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',handlebars({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');
app.use(express.static('views')); 

const routes = require('./controllers/routes.js');
app.use('/',routes);

const port = 8080;
app.listen(port);