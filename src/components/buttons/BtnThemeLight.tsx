import Button from './Button';
import IconLight from '../icons/IconLight';

const BtnThemeLight = () => {
	return (
		<Button leftIcon={<IconLight />} colorScheme='teal' size='md' variant='solid'>
			Light
		</Button>
	);
};

export default BtnThemeLight;
