import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "sun",
	},
	winter: {
		text: "Burr, its chilly",
		iconName: "snowflake",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonsDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	// console.log(season);
	// const text =
	// 	season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
	const { text, iconName } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left ${iconName} massive loading icon`} />
			<h1>{text}</h1>
			<i className={`icon-right ${iconName} massive loading icon`} />
		</div>
	);
};

export default SeasonsDisplay;
