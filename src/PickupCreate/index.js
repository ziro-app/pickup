import React, { Component } from 'react'
import { initialUiState, changeUiState } from './methods/stateMachine'
import renderForm from './methods/renderForm'

export default class PickupCreate extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* user inputs */
		pickup_code: ''
	}
	/*-- methods --*/
	changeUiState = changeUiState(this)
	renderForm = renderForm(this)
	/*-- lifecycle --*/
	render = () => this.renderForm(this.state.uiState)
}