import React from 'react';
import './StarWars.css';

export default function Starship(props) {
	return(
		<div className="starship">
			<h3>{props.starship.name}</h3>

			<div className="info-section">
				<p>Model: {props.starship.model}</p>
				<p>Manufacturer: {props.starship.manufacturer}</p>
				<p>Cost In Credits: {props.starship.cost_in_credits}</p>
				<p>Length: {props.starship.length}</p>
				<p>Max Atmosphering Speed: {props.starship.max_atmosphering_speed}</p>
			</div>
		</div>
	);
}