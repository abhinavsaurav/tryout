import React from "react";
// import faker from "faker";

const CommentDetails = (props) => {
	//props is passed as the first variable which contains the property
	// using the props.author argument passed from the JSX to include for the specific child component
	// console.log(props);
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.commentText}</div>
			</div>
		</div>
	);
};

export default CommentDetails;
