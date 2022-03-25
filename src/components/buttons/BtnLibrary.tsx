import { Button } from '@chakra-ui/react';
import IconLibrary from '../icons/IconLibrary';

const BtnLibrary = () => {
	return (
		<Button leftIcon={<IconLibrary />} colorScheme='teal' size='md' variant='solid'>
			Library
		</Button>
	);
};

export default BtnLibrary;
