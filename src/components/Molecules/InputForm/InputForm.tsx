import LabelBase from '../../Atoms/LabelBase/LabelBase';
import TextInput from '../../Atoms/TextInput/TextInput';
import './InputformStyle.scss';
import {TypeInputFormProps} from '../../../types/types';

const InputForm = ({label, placeholder}: TypeInputFormProps) => {

	return(
		<div>
			<LabelBase label={label}/>
			<TextInput placeholder={placeholder}/>
		</div>
	)
}

export default InputForm;