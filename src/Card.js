import React from 'react';
import './Card.css';

function Card(props) {
	console.log(props);
	return (
		<div className='Card' key={props.id}>
			<button type='button' onClick={() => props.onClickDelete(props.id)}>
				delete
			</button>
			<h3>{props.id}</h3>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
		</div>
	);
}

Card.propTypes = {
	onClickDelete: () => {}
};

export default Card;
