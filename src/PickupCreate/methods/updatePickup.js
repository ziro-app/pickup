const updatePickup = that => value => {
	if (value) {
		that.setState({ pickup_code: value })
		that.changeUiState('INPUT')
	} else {
		that.setState({ pickup_code: '' })
		that.changeUiState('INPUT')
	}
}

export default updatePickup