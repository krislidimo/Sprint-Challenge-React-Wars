import React from 'react';

export default function Vehicles(props) {
	return(
		<div className="vehicle">
			<p>Name: {props.vehicle.name}</p>
			<p>Model: {props.vehicle.model}</p>
			<p>Manufacturer: {props.vehicle.manufacturer}</p>
			<p>Cost In Credits: {props.vehicle.cost_in_credits}</p>
			<p>Length: {props.vehicle.length}</p>
			<p>Max Atmosphering Speed: {props.vehicle.max_atmosphering_speed}</p>
		</div>
	);
}