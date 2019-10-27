// Create an instance of an express router
const router = require('express').Router();
// Use body parser to parse the body of the request
const bodyParser = require('body-parser');
// Use node-fetch library to easily make requests
const fetch = require("node-fetch");

// Tell express to use body-parser as middleware
//router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Root route (required), just displays a welcome message
router.get('/', (req, res) => {
	// There are 4 pages of starships on the Star Wars API (swapi.co)
	let randPage = Math.floor(Math.random() * 4) + 1
	// Add the random page number to the base URL
	let url = 'https://swapi.co/api/starships/?page=' + randPage.toString()
	// Fetch the data in JSON form from the API
	// No authentication is required because it is so small
	fetch(url)// + rand.toString())
	  .then(res => res.json())
		.then(json => {
			// Randomly index into the results
			let randIndex = Math.floor(Math.random() * json["count"]) + 1
			// Make sure the result is not undefined ( a lot of broken data in the API )
			while (json["results"][randIndex] == null) {
				// If it is null then regenerate the random index
				randIndex = Math.floor(Math.random() * count) + 1
			}
			let randomShip = json["results"][randIndex]
			// Render the starship.pug Pug template using the data from the random starship
			res.status(200).render('starship', randomShip)
		})
		// Throw a general server-side error in case something goes wrong
	  .catch(err => res.status(500).json());
});

module.exports = router;
