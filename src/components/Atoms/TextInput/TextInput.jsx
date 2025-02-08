import './TextInputStyle.scss'

const TextInput = ({placeholder}) => {

	return (
		<input className='base-input' type='text' name={placeholder} placeholder={placeholder}/>
	)
}

export default TextInput;