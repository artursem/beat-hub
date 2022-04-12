import IconButton from './IconButton';
import IconHome from '../icons/IconHome';

const BtnHomeSmall = () => {
	return (
		<IconButton
			aria-label='Home'
			icon={<IconHome />}
			colorScheme='teal'
			size='md'
			variant='solid'
		/>
	);
};

export default BtnHomeSmall;
