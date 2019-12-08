// Create an instance of an express router
const router = require('express').Router();
// Use node-fetch library to easily make requests
const fetch = require("node-fetch");

var counter = 0

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018";



// A route using the GET method that retrieves data from an external API
router.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
		console.log("Database created!");
		//db.close();
		if (counter == 0) {
			console.log("First Time");
			var i;
			var lastCocktail;
			for (i = 0; i < 50; i++) {
				let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
				fetch(url)
					.then(res => res.json())
					.then(json => {
						let randCocktail = json["drinks"][0]
						console.log(randCocktail)
						lastCocktail = randCocktail
						client.db.collection("cocktails").insertOne(randCocktail, function(err, res) {
						if (err) throw err;
						console.log("1 document inserted");
						//db.close();
						});
					})
					// Throw a general server-side error in case something goes wrong
					//.catch(err => res.status(500).json());
				}
				//Get a random cocktail from the DB
				res.status(200).render('cocktailInfo', lastCocktail)
				client.close()
			}
			else {
				// get from Mongo
				randomCocktail = client.db.collection("cocktails").aggregate([{ $sample: { size: 1 } }])
				// (Render the starship.pug Pug template using the data from the random starship)
				// A back-end rendered page to display the results of your call. This can be
				// EJS, Pug, or any other templating language that you’d like to use.
				res.status(200).render('cocktailInfo', randomCocktail)
				client.close()
			}
		});
	});


module.exports = router;
