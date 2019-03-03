import { getOptionsCodes, getOptionsSuppliers } from './getOptions'

const fetchFromSheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	const codes = getOptionsCodes(values,20,21)
	const suppliers = getOptionsSuppliers(values,5)
	return { codes, suppliers }
}

export default fetchFromSheet