const updateDropdown = that => (input_name, input_value) => {
	that.setState({ [input_name]: input_value })
	that.changeUiState('INPUT')
}

export default updateDropdown