import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					author="sam"
					timeAgo="Today at 6:00PM"
					avatar={faker.image.avatar()}
					commentText="Oh no!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					author="Alex"
					timeAgo="Yesterday at 2PM"
					avatar={faker.image.avatar()}
					commentText="Mercy"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					author="Jane"
					timeAgo="Today at 2AM"
					avatar={faker.image.avatar()}
					commentText="My Lord!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
