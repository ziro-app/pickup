import React from 'react'
import ErrorBoundary from '../ErrorBoundary/index'
import Header from '../Header/index'

const App = () => 
	<ErrorBoundary>
		<Header title={'Retiradas'}>
			<div>Hello!</div>
		</Header>
	</ErrorBoundary>

export default App