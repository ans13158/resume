/*<!----------------------------------Index JS file for resumeBuilder ---------------------------------- >*/
var express = require('express');
var router = express.Router();


router.get('/', (req,res)=> {
	//res.render('head');
	res.render('index');
});

module.exports = router;
