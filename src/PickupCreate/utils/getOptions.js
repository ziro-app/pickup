export const

getOptionsCodes = (data, index) =>
	data.map(value => value[index]).slice(1).sort().filter(value => Boolean(value))