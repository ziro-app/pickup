import React from 'react'
import AlertSvg from './AlertSvg'
import { container, errorMessage } from './styles'

const ErrorOnFetch = () =>
	<div style={container}>
		<AlertSvg size={32} />
		<p style={errorMessage}>Ocorreu um erro no carregamento dos dados</p>
		<p style={errorMessage}>Teste sua conexão à internet e tente novamente</p>
		<p style={errorMessage}>Se o erro persistir contate o suporte</p>
	</div>

export default ErrorOnFetch