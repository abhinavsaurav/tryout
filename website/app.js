const postData = async (url = "", data = {}) => {
	//console.log("Entered post data:", data);
	const response = await fetch(url, {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		// Body data type must match "Content-Type" header
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
		console.log(newData);
		return newData;
	} catch (error) {
		console.log("error", error);
	}
};

document.getElementById("btn").addEventListener("click", performAction);
let textAreaOk = "";
function performAction(e) {
	const newAnimal = document.getElementById("box1").value;
	textAreaOk = document.getElementById("box2").value;
	//getAnimal(baseURL, newAnimal, apiKey);
	getAnimal("/animalURL", "dummy", "dummy")
		.then((data1) => {
			console.log("In getAnimal");
			console.log(data1);
			postData("/addData", {
				animals: data1.animals,
				fact: data1.fact,
				fav: textAreaOk,
			});
		})
		.then(updateUI());
}

const getAnimal = async (baseURL, animal, key) => {
	//dummy url below so commenting it out
	//   const res = await fetch(baseURL+animal+key)
	console.log("reaches here");
	const res = await fetch(baseURL);
	try {
		const data = await res.json();
		console.log("GetAnimal try:", data);
		return data;
	} catch (error) {
		console.log("error", error);
		// appropriately handle the error
	}
};

const updateUI = async () => {
	let req = await fetch("/fetchData");
	try {
		let dataa = await req.json();
		console.log(
			dataa
		); /** getting no Data here on first try but works after that*/
	} catch (error) {
		console.log("error!" + error);
	}
};

// const updateUI = async () => {
// 	//remember async
// 	let request = await fetch("/fetchData"); //forgot how to fetch but remember sometime later
// 	// try {
// 	let dataa = await request.json(); //forgot this line of code
// 	console.log("Entered updateUI:", JSON.stringify(dataa));
// 	document.getElementById("box11").innerHTML = dataa[0].animals; //returning to array
// 	document.getElementById("box22").innerHTML = dataa[0].fact;
// 	document.getElementById("box33").innerHTML = dataa[0].fav;
// 	// } catch (error) {
// 	// 	console.log("error" + error);
// 	// }
// };
