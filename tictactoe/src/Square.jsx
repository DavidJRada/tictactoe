import React from 'react';

class Square extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			piece: null			
		}
		this.playerToggle = this.playerToggle.bind(this)
	}

	playerToggle() {
		if (!this.state.piece) {

		}
	}

	render() {
		return(
		<button onClick={this.props.changer}>{this.state.piece}</button>
		)
	}
}

export default Square;