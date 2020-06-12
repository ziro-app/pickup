import findReseller from '../utils/findReseller'

const updateTextInput = that => name => value => {
	if (name === 'pickup_code')
		that.setState({
			pickup_code: value.toUpperCase(),
			reseller: findReseller(that.state.resellers, value)
		})
	if( name === 'boleto')
		that.setState({
			boleto:value,
		})
		that.changeUiState('INPUT')
	if (name === 'comments')
		that.setState({ comments: value })
	that.changeUiState('INPUT')
}

export default updateTextInput