import IconButton from './IconButton';
import IconLight from '../icons/IconLight';

const BtnThemeLightSmall = () => {
	return (
		<IconButton
			aria-label='Light Mode'
			icon={<IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
		/>
	);
};

export default BtnThemeLightSmall;
