/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import FormInput from './FormInput/index'
import Code from './Code/index'
import Submit from './Submit/index'
import { body } from './styles'

const Form = ({ state, updatePickup, submitForm }) => {
	const {
		uiState, pickup_code, error_pickup_code, date, error_date
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
						type='text'
						placeholder={pickup_code || 'Cód. Retirada'}
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
						onDayChange={updateDayPicker()}
						formatDate={formatDate}
						dayPickerProps={dayPickerProps}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={formatDate(end_date)}
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