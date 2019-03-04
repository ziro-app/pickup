import { post } from 'axios'

const sendToBackend = async ({ 
		pickup_code,
		date,
		supplier
	}) => {
	const { data: message } = await Promise.resolve({ data: 'Success' })
	if (message !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend