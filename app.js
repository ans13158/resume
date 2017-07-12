/*<!----------------------------------Index JS file for resumeBuilder ---------------------------------- >*/
var express = require('express');
var ejs = require('ejs');
var app = express();
var routes = require('./routes/index');
var expressLayouts = require('express-ejs-layouts');

app.use('/css', express.static(__dirname + '/css' ));
app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/', routes);
app.use(expressLayouts);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.listen(3000, ()=>  {
	console.log('Welcome to Online resumeBuilder. Listening to port 3000');
});
