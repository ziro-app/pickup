/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateTextInput from './methods/updateTextInput'
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
		suppliers: [],
		boletos: [],
		branches: [],
		options_bags: ['1', '2', '3', '4'],
		options_invoice: ['Sim', 'Não'],
		resellers: [],
		/* user inputs */
		pickup_code: '',
		boleto: '',
		date: '',
		supplier: '',
		address: '',
		bags: '',
		invoice: '',
		comments: '',
		reseller: 'nenhum',
		/* error messages */
		error_pickup_code: '',
		error_boleto: '',
		error_date: '',
		error_supplier: '',
		error_address: '',
		error_bags: '',
		error_invoice: ''
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updateTextInput = updateTextInput(this)
	updateDayPicker = updateDayPicker(this)
	updateDropdown = updateDropdown(this)
	submitForm = submitForm(this)
	renderForm = renderForm(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderForm(this.state.uiState)
}