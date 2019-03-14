import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List Component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<List cards={[]} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('List UI renders as expected', () => {
		const props = {
			lists: [
				{
					id: '1',
					header: 'First list',
					cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm']
				},
				{
					id: '2',
					header: 'Second list',
					cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k']
				},
				{
					id: '3',
					header: 'Third list',
					cardIds: [
						'a',
						'b',
						'c',
						'd',
						'e',
						'f',
						'g',
						'h',
						'i',
						'j',
						'k',
						'l',
						'm'
					]
				},
				{
					id: '4',
					header: 'Fourth list',
					cardIds: ['l', 'm']
				}
			],
			allCards: {
				a: { title: 'First card', content: 'lorem ipsum' },
				b: { title: 'Second card', content: 'lorem ipsum' },
				c: { title: 'Third card', content: 'lorem ipsum' },
				d: { title: 'Fourth card', content: 'lorem ipsum' },
				e: { title: 'Fifth card', content: 'lorem ipsum' },
				f: { title: 'Sixth card', content: 'lorem ipsum' },
				g: { title: 'Seventh card', content: 'lorem ipsum' },
				h: { title: 'Eighth card', content: 'lorem ipsum' },
				i: { title: 'Ninth card', content: 'lorem ipsum' },
				j: { title: 'Tenth card', content: 'lorem ipsum' },
				k: { title: 'Eleventh card', content: 'lorem ipsum' },
				l: { title: 'Twelth card', content: 'lorem ipsum' },
				m: { title: 'Thirteenth card', content: 'lorem ipsum' }
			}
		};
		const tree = renderer
			.create(
				<List cards={props.lists[0].cardIds.map(id => props.allCards[id])} />
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
