const findReseller = (resellers, pickup_code) => {
	const [ reseller ] = resellers.filter( value => value[1] === pickup_code)
	if (reseller)
		return reseller[0]
	return 'nenhum'
}

export default findReseller