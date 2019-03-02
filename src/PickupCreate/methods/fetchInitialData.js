import { get, isCancel } from 'axios'
import fetchFromSheet from '../utils/fetchFromSheet'

const fetchInitialData = that => async () => {
	try {
		that.setState(await fetchFromSheet(get, that.cancelTokenSource))
		that.changeUiState('SUCCESS')
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			that.changeUiState('ERROR')
			console.log(error.response)
		}
	}
}

export default fetchInitialData