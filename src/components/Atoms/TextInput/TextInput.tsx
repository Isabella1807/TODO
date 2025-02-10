import './TextInputStyle.scss'
import {Dispatch, SetStateAction} from 'react';

interface props {
	placeholder: string,
	setValue: Dispatch<SetStateAction<string>>
}

const TextInput = ({placeholder, setValue}: props) => {

	return (
		<input className='base-input' type='text' name={placeholder} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}/>
	)
}

export default TextInput;
