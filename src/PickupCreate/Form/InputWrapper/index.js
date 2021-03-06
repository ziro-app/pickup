import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage/index'

const InputWrapper = ({ uiState, errorMessage, render, renderSubmitting }) => {
	if (uiState === 'submitting')
		return <ErrorMessage message={errorMessage}>{renderSubmitting()}</ErrorMessage>
	return <ErrorMessage message={errorMessage}>{render()}</ErrorMessage>
}

InputWrapper.propTypes = {
	uiState: PropTypes.string.isRequired,
	errorMessage: PropTypes.string.isRequired,
	render: PropTypes.func.isRequired,
	renderSubmitting: PropTypes.func.isRequired
}

export default InputWrapper