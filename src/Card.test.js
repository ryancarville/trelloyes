import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card Component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Card />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Card UI renders as expected', () => {
		const props = [{ title: 'First card', content: 'lorem ipsum' }];
		const tree = renderer
			.create(<Card title={props.title} content={props.content} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
