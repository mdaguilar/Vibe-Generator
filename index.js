const express = require('express');
const cors = require('cors')
const QUIZ = require('./quiz.js');

const port = 80;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());

app.listen(port, () => {
  console.log("listening on port 80");
});

// generates home page
app.get('/', (req, res) => {
  res.render("home");
});

// generates quiz page
app.get('/quiz', (req, res) => {
  res.render("quiz");
});

// generates results page
app.get('/results', function(req, res) {
  
  const responses = [
	req.query.Working || 0,
	req.query.Mood || 0,
	req.query.Plant || 0,
	req.query.Location || 0,
	req.query.Voice || 0,
	req.query.Aesthetic || 0,
	req.query.Game || 0,
	req.query.Book || 0,
	req.query.Show || 0,
	req.query.Years || 0,
	req.query.Meme || 0,
	req.query.Drink || 0,
	req.query.Hackathon || 0,
	req.query.Ground || 0,
	req.query.Pet || 0
  ];
  
  if (responses.every((val) => val > 0)) {
	const genre_result_link = QUIZ.getPlaylistLink(responses);
	console.log(genre_result_link);

	res.render("results", {"genre_result_link":genre_result_link});
	
  } else {
	console.log("You have unanswered questions!");
  }

});
