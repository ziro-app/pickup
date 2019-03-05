/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import utils */
import formatDate from '../utils/formatDate'
import { dayPickerProps } from '../utils/dayPickerProps'
import createAddressList from '../utils/createAddressList'
/* import components */
import FormInput from './FormInput/index'
import Code from './Code/index'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import InputForDayPicker from './InputForDayPicker/index'
import Dropdown from '@ziro/dropdown'
import Submit from './Submit/index'
import { body, input } from './styles'

const Form = ({ state, updatePickup, updateDayPicker, updateDropdown, submitForm }) => {
	const {
		uiState, pickup_code, error_pickup_code, date, error_date, supplier, error_supplier,
		suppliers, address, error_address, branches, bags, error_bags, options_bags, invoice,
		error_invoice, options_invoice
	} = state
	return (
		<div style={body}>
			{/*---------------------------PICKUP_CODE-------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_pickup_code}
				render={() => (
					<Code
						value={pickup_code}
						updatePickup={updatePickup}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={pickup_code}
						disabled={true}
					/>
				)}
			/>
			{/*------------------------------DATE----------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_date}
				render={() => (
					<DayPickerInput
						component={InputForDayPicker}
						placeholder='Data Retirada'
						value={date}
						onDayChange={updateDayPicker}
						formatDate={formatDate}
						dayPickerProps={dayPickerProps}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={formatDate(date)}
						disabled={true}
					/>
				)}
			/>
			{/*---------------------------SUPPLIER-------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_supplier}
				render={() => (
					<Dropdown
						name='supplier'
						placeholder='Fornecedor'
						options={suppliers}
						value={supplier}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={supplier}
						disabled={true}
					/>
				)}
			/>
			{/*---------------------------ADDRESS-------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_address}
				render={() => (
					<Dropdown
						name='address'
						placeholder='Endereço'
						options={createAddressList(branches, supplier)}
						value={address}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={address}
						disabled={true}
					/>
				)}
			/>
			{/*---------------------------BAGS-------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_bags}
				render={() => (
					<Dropdown
						name='bags'
						placeholder='Quantidade de sacolas'
						options={options_bags}
						value={bags}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={bags}
						disabled={true}
					/>
				)}
			/>
			{/*---------------------------INVOICE-------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_invoice}
				render={() => (
					<Dropdown
						name='invoice'
						placeholder='Retirar nota fiscal?'
						options={options_invoice}
						value={invoice}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={invoice}
						disabled={true}
					/>
				)}
			/>
			<Submit uiState={uiState} submitForm={submitForm} />
		</div>
	)
}

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updatePickup: PropTypes.func.isRequired,
	updateDayPicker: PropTypes.func.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired
}

export default Form