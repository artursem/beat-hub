import { Button } from '@chakra-ui/react';
import IconHome from '../icons/IconHome';

const BtnHome = () => {
	return (
		<Button leftIcon={<IconHome />} colorScheme='teal' size='md' variant='solid'>
			Home
		</Button>
	);
};

export default BtnHome;
