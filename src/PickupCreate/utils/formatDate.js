const translateMonth = month => {
	switch (month) {
		case 'Jan': return 'Jan'
		case 'Feb': return 'Fev'
		case 'Mar': return 'Mar'
		case 'Apr': return 'Abr'
		case 'May': return 'Mai'
		case 'Jun': return 'Jun'
		case 'Jul': return 'Jul'
		case 'Aug': return 'Ago'
		case 'Sep': return 'Set'
		case 'Oct': return 'Out'
		case 'Nov': return 'Nov'
		case 'Dec': return 'Dez'
	}
}

const formatDate = date =>
	`${date.toString().substr(8,2)}/${translateMonth(date.toString().substr(4,3))}/${date.getFullYear()}`

export default formatDate