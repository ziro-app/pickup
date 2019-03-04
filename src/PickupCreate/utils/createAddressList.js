const createAddressList = (branchesList, supplierName) => {
	const [ filtered ] = branchesList.filter(({ supplier }) => supplier === supplierName)
	if (filtered)
		return filtered.branches
	return []
}

export default createAddressList