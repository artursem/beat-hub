import IconButton from './IconButton';
import IconLibrary from '../icons/IconLibrary';

const BtnLibrarySmall = () => {
	return (
		<IconButton
			aria-label='Library'
			icon={<IconLibrary />}
			colorScheme='teal'
			size='md'
			variant='solid'
		/>
	);
};

export default BtnLibrarySmall;
