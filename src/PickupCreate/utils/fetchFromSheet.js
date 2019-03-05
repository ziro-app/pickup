import { getCodes, getSuppliers, getBranches } from './getOptions'

const fetchFromSheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	console.log(values)
	const codes = getCodes(values,20,21)
	const suppliers = getSuppliers(values,5)
	const branches = getBranches(values,22)
	return { codes, suppliers, branches }
}

export default fetchFromSheet