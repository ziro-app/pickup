import { codeIsValid, dateIsValid, optionIsValid } from './validateFields'
import createAddressList from './createAddressList'

const validateForm = ({
	pickup_code,
	date,
	supplier,
	address,
	codes,
	suppliers,
	branches
}) => {
	if (codes && suppliers && branches) {
		const pickup_code_is_valid = codeIsValid(codes, pickup_code)
		const date_is_valid = dateIsValid(date)
		const supplier_is_valid = optionIsValid(suppliers, supplier)
		const address_is_valid = optionIsValid(createAddressList(branches, supplier), address)
		const formIsValid = pickup_code_is_valid
			&& date_is_valid
			&& supplier_is_valid
			&& address_is_valid
		return {
			formIsValid,
			pickup_code_is_valid,
			date_is_valid,
			supplier_is_valid,
			address_is_valid
		}
	}
}

export default validateForm