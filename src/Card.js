import React from 'react';
import './Card.css';

function Card(props) {
	return (
		<div className='Card'>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
			<button type='button'> delete </button>
		</div>
	);
}

export default Card;
