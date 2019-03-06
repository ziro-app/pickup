import { post } from 'axios'

const sendToBackend = async ({ 
		pickup_code,
		date,
		reseller,
		supplier,
		address,
		bags,
		invoice,
		comments
	}) => {
	const { data: message } = await post(`${process.env.API_URL}`, {
		pickup_code,
		date,
		reseller,
		supplier,
		address,
		bags,
		invoice,
		comments
	})
	if (message !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend