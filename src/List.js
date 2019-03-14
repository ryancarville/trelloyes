import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
	return (
		<section className='List'>
			<header className='List-header'>
				<h2>{props.header}</h2>
			</header>
			<div className='List-cards'>
				{props.cards.map(card => (
					<Card title={card.title} content={card.content} />
				))}
			</div>
			<button type='button'> + Add Random Card </button>
		</section>
	);
}

export default List;
