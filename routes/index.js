/*<!----------------------------------Index JS file for routing requests on resumeBuilder ---------------------------------- >*/
var express = require('express');
var router = express.Router();


router.get('/', (req,res)=> {
	//res.render('head');
	res.render('index');
});

router.get('/test', (req,res)  =>  {
	res.render('test');
});

module.exports = router;
