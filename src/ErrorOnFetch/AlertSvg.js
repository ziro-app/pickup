import React from 'react'
import PropTypes from 'prop-types'

const AlertSvg = ({ size, color }) =>
	<svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
		<circle cx='12' cy='12' r='10'></circle>
		<line x1='12' y1='8' x2='12' y2='12'></line>
		<line x1='12' y1='16' x2='12' y2='16'></line>
	</svg>

AlertSvg.defaultProps = {
	size: 24,
	color: 'currentColor'
}

AlertSvg.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}

export default AlertSvg
