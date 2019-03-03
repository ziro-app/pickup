const generateErrorMessages = ({
	pickup_code_is_valid,
	date_is_valid
}) => {
	const error_pickup_code = pickup_code_is_valid ? '' : 'Código inválido'
	const error_date = date_is_valid ? '' : 'Data inválida'
	return {
		error_pickup_code,
		error_date
	}
}

export default generateErrorMessages