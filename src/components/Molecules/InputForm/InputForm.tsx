import LabelBase from '../../Atoms/LabelBase/LabelBase';
import TextInput from '../../Atoms/TextInput/TextInput';
import './InputformStyle.scss';
import {Dispatch, SetStateAction} from 'react';

interface props {
	label: string,
	placeholder: string,
	setValue: Dispatch<SetStateAction<string>>,
}

const InputForm = ({label, placeholder, setValue}: props) => {

	return(
		<div className='input-form-container'>
			<LabelBase label={label}/>
			<TextInput placeholder={placeholder} setValue={setValue}/>
		</div>
	)
}

export default InputForm;