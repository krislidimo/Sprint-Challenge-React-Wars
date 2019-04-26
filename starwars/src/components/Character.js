import React from 'react';
import Starship from './Starship';
import Vehicle from './Vehicle';
import './StarWars.css';

export default function character(props) {
	return(
		<div className="character">
			<p>Name: {props.character.name}</p>
			<p>Birth Year: {props.character.birth_year}</p>
			<p>Gender: {props.character.gender}</p>
			<p>Height: {props.character.height}</p>
			<p>Mass: {props.character.mass}</p>

			{props.character.starships.map(starship => {
				return <Starship key={starship.model} starship={starship}/>
			})}

			{props.character.vehicles.map(vehicle => {
				return <Vehicle key={vehicle.model} vehicle={vehicle}/>
			})}

		</div>
	);
}