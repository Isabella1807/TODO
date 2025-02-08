import LabelBase from '../../Atoms/LabelBase/LabelBase.jsx';
import TextInput from '../../Atoms/TextInput/TextInput.jsx';
import './InputformStyle.scss';

const InputForm = ({label, placeholder}) => {

	return(
		<div>
			<LabelBase label={label}/>
			<TextInput placeholder={placeholder}/>
		</div>
	)
}

export default InputForm;