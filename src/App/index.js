import React from 'react'
import ErrorBoundary from '../ErrorBoundary/index'
import PickupCreate from '../PickupCreate/index'

const App = () => 
	<ErrorBoundary>
		<PickupCreate />
	</ErrorBoundary>

export default App