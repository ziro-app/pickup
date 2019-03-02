import React from 'react'
import PropTypes from 'prop-types'
import AlertSvg from './AlertSvg'
import { error } from './styles'

const ErrorMessage = ({ message, children }) =>
	<div>
		<label style={error}>{message ? <AlertSvg size={16} /> : null} &nbsp; {message}</label>
		{children}
	</div>

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default ErrorMessage