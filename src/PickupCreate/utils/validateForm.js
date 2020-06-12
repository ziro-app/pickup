import { optionIsValid, dateIsValid } from './validateFields'
import createAddressList from './createAddressList'

const validateForm = ({
	pickup_code,
	boleto,
	date,
	supplier,
	address,
	bags,
	invoice,
	codes,
	suppliers,
	boletos,
	branches,
	options_bags,
	options_invoice
}) => {
	if (codes && suppliers && branches && options_bags && options_invoice && boletos) {
		const pickup_code_is_valid = optionIsValid(codes, pickup_code)
		const boleto_is_valid = optionIsValid(boletos, boleto)
		const date_is_valid = dateIsValid(date)
		const supplier_is_valid = optionIsValid(suppliers, supplier)
		const address_is_valid = optionIsValid(createAddressList(branches, supplier), address)
		const bags_is_valid = optionIsValid(options_bags, bags)
		const invoice_is_valid = optionIsValid(options_invoice, invoice)
		const formIsValid = pickup_code_is_valid
			&& boleto_is_valid
			&& date_is_valid
			&& supplier_is_valid
			&& address_is_valid
			&& bags_is_valid
			&& invoice_is_valid
		return {
			formIsValid,
			boleto_is_valid,
			pickup_code_is_valid,
			date_is_valid,
			supplier_is_valid,
			address_is_valid,
			bags_is_valid,
			invoice_is_valid
		}
	}
}

export default validateForm