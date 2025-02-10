import './LabelBaseStyle.scss'

interface TypeInputFormProps {
	label: string,
}

const LabelBase = ({label}: TypeInputFormProps) => {

	return(
		<p className='label-tag'>
			{label}
		</p>
	)
}

export default LabelBase;