import './TextInputStyle.scss'
import {TypeInputFormProps} from "../../../types/types";

const TextInput = ({placeholder}: {placeholder: TypeInputFormProps['placeholder']}) => {

	return (
		<input className='base-input' type='text' name={placeholder} placeholder={placeholder}/>
	)
}

export default TextInput;
