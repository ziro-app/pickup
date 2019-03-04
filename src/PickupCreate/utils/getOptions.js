export const

getOptionsCodes = (data, index_one, index_two) =>
	data.map(value => [ value[index_one], value[index_two] ]).slice(1).filter(value => Boolean(value[1])),

getOptionsSuppliers = (data, index) =>
	data.map(value => value[index]).slice(2).filter(value => Boolean(value[0])),

getOptionsBranches = (data, index) => {
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
