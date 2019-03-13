import stringToDate from './stringToDate'

export const

getResellersAndCodes = (data, index_zero, index_one, index_two, index_three) => {
	return data.map(value => {
		const start_date = value[index_zero]
		const reseller = value[index_one]
		const status = value[index_two]
		const code = value[index_three]
		const validCode = status
			&& !status.match(/(Em trânsito)|(Entregue)|(Cancelado)/g)
			&& stringToDate(start_date) <= new Date()
		if (validCode)
			return [ reseller, status, code ]
		return null
	}).slice(1).filter(value => Boolean(value)).filter(value => Boolean(value[2]))
},

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(2).filter(value => Boolean(value[0])),

getBranches = (data, index) => {
	return data.map(value => {
		const supplier = value[index]
		const rawList = [
			value[index + 2] ? `${value[index + 2]} — ${value[index + 3]}` : null,
			value[index + 4] ? `${value[index + 4]} — ${value[index + 5]}` : null,
			value[index + 6] ? `${value[index + 6]} — ${value[index + 7]}` : null,
			value[index + 8] ? `${value[index + 8]} — ${value[index + 9]}` : null,
			value[index + 10] ? `${value[index + 10]} — ${value[index + 11]}` : null
		]
		const branches = rawList.filter(value => Boolean(value))
		if (supplier)
			return { supplier, branches }
		return null
	}).slice(1).filter(value => Boolean(value))
}