import React from 'react';

export default function character(props) {
	return(
		<div className="character">
			<p>{props.character.name}</p>
			<p>{props.character.birth_year}</p>
			<p>{props.character.gender}</p>
			<p>{props.character.height}</p>
			<p>{props.character.mass}</p>
			<p>{props.character.starships}</p>
		</div>
	);
}