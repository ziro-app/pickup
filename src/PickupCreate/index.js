/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updatePickup from './methods/updatePickup'
import updateDayPicker from './methods/updateDayPicker'
import updateDropdown from './methods/updateDropdown'
import submitForm from './methods/submitForm'
import renderForm from './methods/renderForm'

export default class PickupCreate extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* dropdown data */
		codes: [],
		resellers: [],
		/* user inputs */
		pickup_code: '',
		date: '',
		reseller: '',
		/* error messages */
		error_pickup_code: '',
		error_date: '',
		error_reseller: ''
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updatePickup = updatePickup(this)
	updateDayPicker = updateDayPicker(this)
	updateDropdown = updateDropdown(this)
	submitForm = submitForm(this)
	renderForm = renderForm(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderForm(this.state.uiState)
}