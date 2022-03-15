import { IconButton } from '@chakra-ui/react';
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
