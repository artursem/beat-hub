import IconButton from './IconButton';
import IconDark from '../icons/IconDark';

const BtnThemeDarkSmall = () => {
	return (
		<IconButton
			aria-label='Dark Mode'
			icon={<IconDark />}
			colorScheme='teal'
			size='md'
			variant='solid'
		/>
	);
};

export default BtnThemeDarkSmall;
