import React from "react";
import ReactDOM from "react-dom";

// we are attaching only one method attached to  it. Normally,
// react expects us to attach a lot of classes which is why we
// are importing React.Component

class App extends React.Component {
	constructor(props) {
		// if we don't use super then we get an error
		super(props);

		/**
		 * This is the only time we do direct assignment
		 */
		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// console.log(position);
				this.setState({ lat: position.coords.latitude });

				//we should never write direct assignment to this.state.lat= position.coords.latitude
			},
			(err) => {
				console.log(err);
			}
		);
	}

	// React says we have to define render !!
	render() {
		// Also, we shouldn't call the fucntion inside render because it
		// will get called again and again for re-rendering so, its gonna make some time if we call it here

		// Also direct object assignment will throw error
		return <div>Lat: {this.state.lat}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
