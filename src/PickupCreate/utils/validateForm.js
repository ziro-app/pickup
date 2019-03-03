import { optionIsValid } from './validateFields'

const validateForm = ({
	pickup_code,
	codes,
	resellers
}) => {
	if (resellers) {
		/* check if each field contains valid values */
		const pickup_code_is_valid = optionIsValid(codes, pickup_code)
		const formIsValid = pickup_code_is_valid
		return {
			formIsValid,
			pickup_code_is_valid
		}
	}
}

export default validateForm