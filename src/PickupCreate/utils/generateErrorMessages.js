const generateErrorMessages = ({
	pickup_code_is_valid
}) => {
	const error_pickup_code = pickup_code_is_valid ? '' : 'Código inválido'
	return {
		error_pickup_code
	}
}

export default generateErrorMessages