import {TypeInputFormProps} from '../../../types/types';


const LabelBase = ({label}: {label: TypeInputFormProps['label']}) => {

	return(
		<p>
			{label}
		</p>
	)
}

export default LabelBase;