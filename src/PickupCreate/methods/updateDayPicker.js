const updateDayPicker = that => date => {
	if (date) {
		that.setState({ date: new Date(new Date(date).setHours(0,0,0)) })
		that.changeUiState('INPUT')
	}
	else {
		that.setState({ date: '' })
		that.changeUiState('INPUT')
	}
}

export default updateDayPicker