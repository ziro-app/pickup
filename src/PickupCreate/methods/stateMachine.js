/* Syntax -> const machine = { state: { action: next_state } } */
/* The state machine is an object whose keys are all the possible state names */
/* States are also objects whose keys are actions and whose values are the next possible states */
/* This state machine is intended to catch errors derived from async code */
/* changeUiState is a transition function for the state machine */

const machine = {
	fetching: { SUCCESS: 'fetched', ERROR: 'error_fetching' },
	error_fetching: {},
	fetched: { INPUT: 'accepting_inputs' },
	accepting_inputs: { INPUT: 'accepting_inputs', SUBMIT: 'submitting' },
	submitting: { SUCCESS: 'submitted', ERROR: 'error_submitting' },
	submitted: { INPUT: 'accepting_inputs' },
	error_submitting: { INPUT: 'accepting_inputs', SUBMIT: 'submitting' }
}

export const

initialUiState = 'fetching',

changeUiState = that => action =>
	that.setState( ({ uiState }) => ({ uiState: machine[uiState][action] }) )