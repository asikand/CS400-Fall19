const router = require('express').Router();

//Use body parser to parse the body of the request
const bodyParser = require('body-parser');

//Tell express to use body-parser as middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//Root path
router.get('/', (req, res) => {
	res.status(200).json({message: 'Welcome to CS400 PS3 assignment!'});
});

//Returns a fixed string (my BU ID number)
router.get('/fixedString', (req, res) => {
	res.status(200).json({string: 'U08237389'});
});

//Returns the original string and the length of the string in the response
router.post('/stringLength', (req, res) => {
	var s = req.body.inputString;
	var len = s.length;
	res.status(200).json({originalString: s, length: len});
});

module.exports = router;
