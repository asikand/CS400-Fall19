// Create an instance of an express router
const router = require('express').Router();

// Use body parser to parse the body of the request
const bodyParser = require('body-parser');

const fetch = require("node-fetch");

// Tell express to use body-parser as middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Root route (required), just displays a welcome message
router.get('/', (req, res) => {
	res.status(200).json({message: 'Welcome to CS400 PS4 assignment!'});
});

// Root route (required), just displays a welcome message
router.get('/random', (req, res) => {
	let randPage = Math.floor(Math.random() * 4) + 1
	// Random number between 1 and 37 (API hasn't been updated for the last two movies)
	// can assume the number of starship entries will remain the same for this project

	let url = 'https://swapi.co/api/starships/?page=' + randPage.toString()
	console.log(url)
	// Fetch the data in JSON form from the API
	// No authentication is required because it is so small
	fetch(url)// + rand.toString())
	  .then(res => res.json())
		.then(json => {
			console.log(json)
			let count = json["count"]
			// Randomly index into
			let randIndex = Math.floor(Math.random() * count) + 1
			//Make sure the result is not undefined ( a lot of broken data in the API )
			while (json["results"][randIndex] == null) {
				randIndex = Math.floor(Math.random() * count) + 1
			}
			res.status(200).render('starship', json["results"][randIndex])
		})
	  .catch(err => res.status(500).json());
});

module.exports = router;
