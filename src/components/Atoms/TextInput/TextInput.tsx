import './TextInputStyle.scss'
import {TypeInputFormProps} from "../../../types/types";
import {ChangeEvent} from "react";

interface props {
	placeholder: string,
	// : (text: ChangeEvent<HTMLInputElement>) => void,
	setValue: Function
}

const TextInput = ({placeholder, setValue}: props) => {

	return (
		<input className='base-input' type='text' name={placeholder} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}/>
	)
}

export default TextInput;
