import './ButtonBaseStyle.scss'

type TypeButtonProp = {
	buttonText: string;
	onClick?: () => void;
};

const ButtonBase = ({buttonText, onClick}: TypeButtonProp) => {

	return (
			<button className='button-base' onClick={onClick}>
				<p className='button-base__text'>
					{buttonText}
				</p>
			</button>
	)
}

export default ButtonBase;