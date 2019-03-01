import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'
import { container, description } from './styles'

const Header = ({ title, children }) =>
	<div style={container}>
	    <Image
			cloudName='ziro'
			width='45'
			publicId='logo-round_kxn8sa'
			version='1508000699'
			format='png'
			secure='true'
			alt='logo'
	    />
		<h1 style={description}>{title}</h1>
		{children}
	</div>

Header.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default Header