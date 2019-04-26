import React from 'react';
import Character from './Character'

export default function CharacterList(props) {
	return (
		<div className="character-list">
			{props.characters.map(character => {
				return <Character key={character.created} character={character}/>
			})}
		</div>
	);
}