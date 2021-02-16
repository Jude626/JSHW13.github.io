const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use