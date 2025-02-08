import './ButtonBaseStyle.scss'
const ButtonBase = ({buttonText}) => {


	return (
			<button className='button-base'>
				<p className='button-base__text'>
					{buttonText}
				</p>
			</button>
	)
}

export default ButtonBase;