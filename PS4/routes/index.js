// Create an instance of an express router
const router = require('express').Router();
// Use node-fetch library to easily make requests
const fetch = require("node-fetch");

// A route using the GET method that retrieves data from an external API
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
			// (Render the starship.pug Pug template using the data from the random starship)
			// A back-end rendered page to display the results of your call. This can be
			// EJS, Pug, or any other templating language that you’d like to use.
			res.status(200).render('starship', randomShip)
		})
		// Throw a general server-side error in case something goes wrong
	  .catch(err => res.status(500).json());
});

module.exports = router;
