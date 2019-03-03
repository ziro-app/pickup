import { codeIsValid, dateIsValid, optionIsValid } from './validateFields'

const validateForm = ({
	pickup_code,
	date,
	reseller,
	codes,
	resellers
}) => {
	if (codes && resellers) {
		/* check if each field contains valid values */
		const pickup_code_is_valid = codeIsValid(codes, pickup_code)
		const date_is_valid = dateIsValid(date)
		const reseller_is_valid = optionIsValid(resellers, reseller)
		const formIsValid = pickup_code_is_valid
			&& date_is_valid
			&& reseller_is_valid
		return {
			formIsValid,
			pickup_code_is_valid,
			date_is_valid,
			reseller_is_valid
		}
	}
}

export default validateForm