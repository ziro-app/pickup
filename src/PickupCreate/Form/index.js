/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import components */
import FormInput from './FormInput/index'

const Form = ({ state }) => {
	const { uiState, pickup_code } = state
	return (
		<div>
			<FormInput uiState={uiState} errorMessage='Erro!'
				render={() => (
					<input />
				)}
				renderSubmitting={() => (
					<input />
				)}
			/>
		</div>
	)
}

export default Form