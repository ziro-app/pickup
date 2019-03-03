import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../../../Spinner/index'
import { message, messageError, submit, submitting } from './styles'

const Submit = ({ uiState, submitForm }) => {
	/* define which component the UI will display based on the current state */
	const componentToRender = {
		default: null,
		submitting: <Spinner size={'5rem'} />,
		submitted: <span>Formulário enviado com sucesso!</span>,
		error_submitting: <span>Erro ao enviar formulário. Tente novamente ou contate o suporte</span>
	}
	/* make sure uiState does not fall out of the available options */
	const ui = uiState !== 'submitting' && uiState !== 'submitted' && uiState !== 'error_submitting'
		? 'default'
		: uiState
	return (
		<div>
			<input
				type='submit'
				style={uiState === 'submitting' ? submitting : submit}
				value={uiState === 'submitting' ? 'Enviando...' : 'Enviar'}
				onClick={uiState === 'submitting' ? null : submitForm}
			/>
			<label style={uiState === 'error_submitting' ? messageError : message}>
				{componentToRender[ui]}
			</label>
		</div>
	)
}

Submit.propTypes = {
	uiState: PropTypes.string.isRequired,
	submitForm: PropTypes.func.isRequired
}

export default Submit