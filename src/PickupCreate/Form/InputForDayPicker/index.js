import React, { Component } from 'react'
import { input, inputFocus } from './styles'

export default class InputForDayPicker extends Component {
	render = () =>
		<input 
			readOnly={true}
			onKeyPress={event => event.preventDefault()}
			style={this.props.value ? inputFocus : input}
			{...this.props}
		/>
}