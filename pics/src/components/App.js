import React from "react";
import unsplash from "./../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		// console.log(term);

		//we imported the preprogrammed version of axios So we are using
		const response = await unsplash.get("/search/photos", {
			params: { query: term },
		});
		// console.log(response.data.results[0].urls.raw);
		this.setState({ images: response.data.results });
	};

	// the onSubmitBro is being passed as a param
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmitBro={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
