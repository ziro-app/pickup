/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import utils */
import formatDate from '../utils/formatDate'
import { dayPickerProps } from '../utils/dayPickerProps'
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
		uiState, pickup_code, error_pickup_code, date, error_date, reseller, error_reseller
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
			{/*---------------------------RESELLER-------------------------*/}
			<FormInput uiState={uiState} errorMessage={error_reseller}
				render={() => (
					<Dropdown
						name='reseller'
						placeholder='Lojista'
						options={resellers}
						value={reseller}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={reseller}
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
	submitForm: PropTypes.func.isRequired
}

export default Form