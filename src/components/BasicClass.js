import React, { Component } from 'react';

export default class BasicClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'ethan',
			test: true,
		};
	}

	componentDidMount() {
		this.setState({
			name: 'new',
		});
	}

	render() {
		return (
			<div>
				hello {this.state.name}, from class. this word is also a second piece of
				state {this.state.test}
			</div>
		);
	}
}
