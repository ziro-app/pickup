import React, { Component } from 'react'
import { input, inputFocus } from './styles'

export default class InputForDayPicker extends Component {
	render = () =>
		<input 
			onKeyPress={event => event.preventDefault()}
			style={this.props.value ? inputFocus : input}
			{...this.props}
		/>
}