const updatePickup = that => value => {
	that.setState({ pickup_code: value.toUpperCase() })
	that.changeUiState('INPUT')
}

export default updatePickup