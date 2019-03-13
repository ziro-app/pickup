const translateMonth = month => {
	switch (month) {
		case 'jan': return 'jan'
		case 'fev': return 'feb'
		case 'mar': return 'mar'
		case 'abr': return 'apr'
		case 'mai': return 'may'
		case 'jun': return 'jun'
		case 'jul': return 'jul'
		case 'ago': return 'aug'
		case 'set': return 'sep'
		case 'out': return 'oct'
		case 'nov': return 'nov'
		case 'dez': return 'dec'
	}
}

const stringToDate = string => {
	if (!string)
		return 0
	if (string.length === 6)
		return new Date(`${string.substr(0,3)}${translateMonth(string.substr(3,3))}${new Date().getFullYear()}`)	
	return new Date(`${string.substr(0,3)}${translateMonth(string.substr(3,3))}${string.substr(6,5)}`)
}

export default stringToDate