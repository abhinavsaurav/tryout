import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		// console.log(term);

		const response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID OaS7Py8RcrHORU7h_CzwB64BHaSqjcKwuTaB6cJbxP0",
			},
		});
		// console.log(response.data.results[0].urls.raw);
		this.setState({ images: response.data.results });
	};

	// the onSubmitBro is being passed as a param
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmitBro={this.onSearchSubmit} />
				Found: {this.state.images.length} images
			</div>
		);
	}
}

export default App;
