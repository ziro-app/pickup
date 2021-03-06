import React from 'react'
import Form from '../Form/index'
import Header from '../../Header/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderForm = that => uiState => {
	const componentToRender = {
		default:
			<Form
				state={that.state}
				updateTextInput={that.updateTextInput}
				updateDayPicker={that.updateDayPicker}
				updateDropdown={that.updateDropdown}
				submitForm={that.submitForm}
			/>,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	return <Header title='Cadastrar retirada'>{componentToRender[ui]}</Header>
}

export default renderForm