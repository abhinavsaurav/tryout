//including express
const express = require("express");
const app = express();

// including the dependency body-parser needed as a middleware // setting the urlencoded method which is mechanism for encoding information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allowing cross origin resourse sharing
const cors = require("cors");
app.use(cors());

app.use(express.static("website"));
const port = 3000;

const server = app.listen(port, listening);

function listening() {
	console.log("Server Running");
	console.log(`Running on localhost: ${port}`);
}

app.get("/", (req, res) => {
	res.send("Wrong directory bro!");
});

const data = [];
let newEntry = {};

app.post("/addData", function (req, res) {
	newEntry = {
		animals: req.body.animals,
		fact: req.body.fact,
		fav: req.body.fav,
	};
	data.push(newEntry);
	res.send(data); //missed this line be carefull
	console.log("In addData in server:", data);
});

//dummy data for the post req
const fakeData = {
	animals: "lion",
	fact: "i don't know the fact",
};

app.get("/animalURL", function (req, res) {
	res.send(fakeData);
	console.log(fakeData);
});

app.get("/fetchData", (req, res) => {
	console.log("Reaching appended data:", data);
	res.send(data);
});
