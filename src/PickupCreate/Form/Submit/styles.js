export const

message = {
	display: 'grid',
	justifyItems: 'center',
	marginTop: '15px',
	textAlign: 'center',
	fontSize: '1.6rem',
	fontWeight: '700',
	color: '#ACCD82'
},

messageError = Object.assign({}, message, {
	color: '#F16B6F'
}),

submit = {
	marginTop: '60px',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	border: 'none',
	borderRadius: '20px',
	width: '100%',
	padding: '10px 25px',
	fontSize: '1.6rem',
	fontWeight: '700',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 5px 10px 1px rgba(48,62,77,0.20), 0px 5px 20px 1px rgba(48,62,77,0.16), 
	0px 5px 30px 1px rgba(48,62,77,0.12), 0px 5px 40px 1px rgba(48,62,77,0.08)`,
},

submitting = Object.assign({}, submit, {
	cursor: 'initial',
	color: 'rgba(48,62,77,0.3)',
	backgroundColor: 'rgba(48,62,77,0.024)',
	boxShadow: 'none'
})