import { getResellersAndCodes, getSuppliers, getBranches } from './getOptions'

const fetchFromSheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	const resellersAndCodes = getResellersAndCodes(values,10,20,21)
	const codes = resellersAndCodes.map(value => value[2])
	const suppliers = getSuppliers(values,5)
	const branches = getBranches(values,22)
	const resellers = resellersAndCodes.map(value => [ value[0], value[2] ])
	return { codes, suppliers, branches, resellers }
}

export default fetchFromSheet