export const

getOptionsCodes = (data, index_one, index_two) =>
	data.map(value => [ value[index_one], value[index_two] ]).slice(1).filter(value => Boolean(value[1]))
