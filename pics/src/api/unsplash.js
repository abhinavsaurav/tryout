import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID OaS7Py8RcrHORU7h_CzwB64BHaSqjcKwuTaB6cJbxP0",
	},
});
