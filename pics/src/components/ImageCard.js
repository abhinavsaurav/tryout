import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
		this.state = { spans: 0 };
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
		// console.log(this.imageRef);
	}

	//remeber for arrow funct otherwise bind error or this error
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans }); // or this.setState({spans:spans}); ES6 syntax
	};

	render() {
		const { description, urls } = this.props.image;
		// inline styling in the div
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} src={urls.regular} alt={description} />
			</div>
		);
	}
}

export default ImageCard;
