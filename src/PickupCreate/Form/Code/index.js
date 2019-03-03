import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { input, inputFilled } from './styles'

export default class Code extends Component {
	handleChange = ({ target: { value } }) => this.props.updatePickup(value)
	render = () => {
		return (
			<input
				style={this.props.value !== '' ? inputFilled : input}
				type='text'
				placeholder='Código Retirada'
				value={this.props.value.toUpperCase()}
				onChange={this.handleChange}
			/>
		)
	}
}

Code.propTypes = {
	value: PropTypes.string.isRequired,
	updatePickup: PropTypes.func.isRequired
}