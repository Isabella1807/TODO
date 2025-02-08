import './ButtonBaseStyle.scss'

type TypeButtonProp = {
	buttonText: string;
};

const ButtonBase = ({buttonText}: TypeButtonProp) => {


	return (
			<button className='button-base'>
				<p className='button-base__text'>
					{buttonText}
				</p>
			</button>
	)
}

export default ButtonBase;