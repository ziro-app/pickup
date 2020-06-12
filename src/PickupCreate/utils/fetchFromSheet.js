import { getResellersAndCodes, getSuppliers, getBranches } from './getOptions'
import axios from 'axios'

const fetchFromSheet = async (get, cancelTokenSource) => {
	const configSheet = {
		method: 'GET',
		url: process.env.SHEET_URL_CNPJ
	}
	try {
		const arrayBoletos = await axios(configSheet)
		const resultBoletos = arrayBoletos.data.values.flat()
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