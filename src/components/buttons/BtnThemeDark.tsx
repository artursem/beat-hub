import Button from './Button';
import IconDark from '../icons/IconDark';

const BtnThemeDark = () => {
	return (
		<Button leftIcon={<IconDark />} colorScheme='teal' size='md' variant='solid'>
			Dark
		</Button>
	);
};

export default BtnThemeDark;
