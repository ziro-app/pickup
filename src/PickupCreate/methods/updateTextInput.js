const updateTextInput = that => name => value => {
	if (name === 'pickup_code')
		that.setState({ pickup_code: value.toUpperCase() })
	if (name === 'comments')
		that.setState({ comments: value })
	that.changeUiState('INPUT')
}

export default updateTextInput