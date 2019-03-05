import validateForm from '../utils/validateForm'
import generateErrorMessages from '../utils/generateErrorMessages'
import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	const { formIsValid, ...fieldsAreValid } = validateForm(that.state)
	that.setState(generateErrorMessages(fieldsAreValid))
	that.changeUiState('INPUT')
	if (formIsValid) {
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.state)
			that.changeUiState('SUCCESS')
			that.setState({
				pickup_code: '',
				date: '',
				supplier: '',
				address: '',
				bags: '',
				invoice: ''
			})
		} catch (error) {
			console.log(error)
			that.changeUiState('ERROR')
			if (error.response)
				console.log(error.response)
		}
	}
}

export default submitForm