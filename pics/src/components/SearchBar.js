import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	// Alternate way of solving the context problem
	// constructor() {
	// 	super();
	// 	this.onFormSubmit = this.onFormSubmit.bind(this);
	// }

	onFormSubmit = (event) => {
		event.preventDefault();

		/**
		 * onSubmitBro is a prop in the App.js file and this file is getting included there via webpack and import
		 *
		 * Explanation for below -> Since it will get included in one main file so all the code here will be in a file
		 * and then we are calling the onSubmitBro
		 * since the onSubmitBro has a function assigned to it the parameter will get passed as function
		 * and then it will be printed by the console.log
		 *
		 */
		this.props.onSubmitBro(this.state.term);
		// console.log(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
