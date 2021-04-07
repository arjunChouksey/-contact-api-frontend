import React from "react";

export const Loader = ({ text }) => {
	return (
		<div className="ui active inverted dimmer">
			<div className="ui medium text loader">{text}</div>
		</div>
	);
};

export const NameLoader = ({ text }) => {
	return (
		<div className="ui active centered inline small text loader">{text}</div>
	);
};
