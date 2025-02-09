import LabelBase from '../../Atoms/LabelBase/LabelBase';
import TextInput from '../../Atoms/TextInput/TextInput';
import './InputformStyle.scss';
import {TypeInputFormProps} from '../../../types/types';

const InputForm = ({label, placeholder, setValue}: any) => {

	return(
		<div>
			<LabelBase label={label}/>
			<TextInput placeholder={placeholder} setValue={setValue}/>
		</div>
	)
}

export default InputForm;