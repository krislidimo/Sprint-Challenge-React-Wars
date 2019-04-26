import React from 'react';
import Starship from './Starship';
import './StarWars.css';

export default class Character extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			starships:[]
		}
	}

	componentDidMount() {
		this.props.character.starships.forEach(ship => {
	    	this.getItem(ship);
		});
	    console.log(this.props.character.starships);
  	}

  	getItem = URL => {
	    // feel free to research what this code is doing.
	    // At a high level we are calling an API to fetch some starwars data from the open web.
	    // We then take that data and resolve it our state.
	    fetch(URL)
	      .then(res => {
	        return res.json();
	      })
	      .then(data => {
	        this.setState({
	        	starships: [
	        		...this.state.starships, 
	        		data
	        	]
	        });
	      })
	      .catch(err => {
	        throw new Error(err);
	      });
	};

	render() {
		return(
			<div className="character">
				<h2 className="char-name">{this.props.character.name}</h2>

				<div className="info-section">
					<p>Birth Year: {this.props.character.birth_year}</p>
					<p>Gender: {this.props.character.gender}</p>
					<p>Height: {this.props.character.height}</p>
					<p>Mass: {this.props.character.mass}</p>
					<p>Hair: {this.props.character.hair_color}</p>
					<p>Skin: {this.props.character.skin_color}</p>
					<p>Eyes: {this.props.character.eye_color}</p>
				</div>

				<h2 className="char-name">Starships</h2>

				<div className="starships">
					{this.state.starships.map(starship => {
						return <Starship key={starship.model} starship={starship} />
					})}
				</div>
			</div>
		);
	};
}