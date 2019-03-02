/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import FormInput from './FormInput/index'
import Code from './Code/index'
import { body } from './styles'

const Form = ({ state, updatePickup }) => {
	const { uiState, pickup_code } = state
	return (
		<div style={body}>
		{/*---------------------------PICKUP_CODE-------------------------*/}
			<FormInput uiState={uiState} errorMessage='Erro!'
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
		</div>
	)
}

export default Form