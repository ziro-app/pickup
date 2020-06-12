import { getResellersAndCodes, getSuppliers, getBranches } from './getOptions'
import axios from 'axios'

const fetchFromSheet = async (get, cancelTokenSource) => {
	const configSheet = {
		method: 'POST',
		url: 'https://sheets.ziro.app/.netlify/functions/api',
		data: {
			"apiResource": "values",
			"apiMethod": "batchGet",
			"spreadsheetId": "1pUul2FOeqxl1xaNXDPmHYdqCKWzxoZ54n-7lvTcIzhE",
			"ranges": ["Boletos Recentes!A2:A"]
		},
		headers: {
			'Authorization': 'Basic emlybzo5YzY2MjQ1NDEzNWFkMWZhZDViZGM0MmUzY2JjM2NjY2IwYTBlZDZjOGE2YTIxYjY5ZDY2NTdiZGE0NjkwNmEwNjhmMTlhMWE4YWRhN2Y5MjNiNTc4NDg2M2U2N2RjM2Y=',
			'Content-Type': 'application/json'
		}
	}
	try {
		const arrayBoletos = await axios(configSheet)
		const resultBoletos = arrayBoletos.data.valueRanges[0].values.flat()
		const { data: { values } } = await get(
			`${process.env.DATA_SHEET_URL}`,
			{ cancelToken: cancelTokenSource.token }
		)
		if (!values)
			await Promise.reject('Error at fetchFromSheet. values is undefined')
		if (values.length === 0)
			await Promise.reject('Error at fetchFromSheet. values.length === 0')
		const resellersAndCodes = getResellersAndCodes(values,8,10,20,21)
		const codes = resellersAndCodes.map(value => value[2])
		const suppliers = ['Pertence do cliente', ...getSuppliers(values,5)]
		const branches = [{ supplier: 'Pertence do cliente', branches: ['Ziro', 'Outro'] }, ...getBranches(values,22)]
		const resellers = resellersAndCodes.map(value => [ value[0], value[2] ])
		const boletos = resultBoletos || []
		return { codes, suppliers, boletos, branches, resellers }	
	} catch (error) {
		console.log(error)
	}
}

export default fetchFromSheet