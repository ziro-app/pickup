import { codeIsValid, dateIsValid, optionIsValid } from './validateFields'

const validateForm = ({
	pickup_code,
	date,
	supplier,
	codes,
	suppliers
}) => {
	if (codes && suppliers) {
		/* check if each field contains valid values */
		const pickup_code_is_valid = codeIsValid(codes, pickup_code)
		const date_is_valid = dateIsValid(date)
		const supplier_is_valid = optionIsValid(suppliers, supplier)
		const formIsValid = pickup_code_is_valid
			&& date_is_valid
			&& supplier_is_valid
		return {
			formIsValid,
			pickup_code_is_valid,
			date_is_valid,
			supplier_is_valid
		}
	}
}

export default validateForm