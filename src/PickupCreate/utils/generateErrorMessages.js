const generateErrorMessages = ({
	pickup_code_is_valid,
	date_is_valid,
	supplier_is_valid,
	address_is_valid,
	bags_is_valid,
	invoice_is_valid
}) => {
	const error_pickup_code = pickup_code_is_valid ? '' : 'Código inválido'
	const error_date = date_is_valid ? '' : 'Data inválida'
	const error_supplier = supplier_is_valid ? '' : 'Fornecedor inválido'
	const error_address = address_is_valid ? '' : 'Endereço inválido'
	const error_bags = bags_is_valid ? '' : 'Opção inválida'
	const error_invoice = invoice_is_valid ? '' : 'Opção inválida'
	return {
		error_pickup_code,
		error_date,
		error_supplier,
		error_address,
		error_bags,
		error_invoice
	}
}

export default generateErrorMessages