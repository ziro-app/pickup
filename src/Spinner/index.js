import React from 'react'
import PropTypes from 'prop-types'
import { svg } from './styles'

const Spinner = ({ size }) =>
	<svg style={svg} width={size} height={size} viewBox='0 0 24 24' strokeWidth='2' strokeLinecap='round'>
		<circle cx='12' cy='12' r='5' fill='none' stroke='rgba(48,62,77,0.2)'></circle>
		<circle cx='12' cy='12' r='5' fill='none' stroke='rgba(127, 134, 143, 1)' strokeDasharray='12 32'></circle>
	</svg>

Spinner.defaultProps = {
	size: '7rem'
}

Spinner.propTypes = {
	size: PropTypes.string
}

export default Spinner