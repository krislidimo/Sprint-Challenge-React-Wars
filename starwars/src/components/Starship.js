import React from 'react';

export default function Starship(props) {
	return(
		<div className="starship">
			<p>Name{props.starship.name}</p>
			<p>Model{props.starship.model}</p>
			<p>Manufacturer{props.starship.manufacturer}</p>
			<p>Cost In Credits{props.starship.cost_in_credits}</p>
			<p>Length{props.starship.length}</p>
			<p>Max Atmosphering Speed{props.starship.max_atmosphering_speed}</p>
		</div>
	);
}