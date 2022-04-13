import { UseToastOptions } from '@chakra-ui/react';

export const artistToast = (name: string, add: boolean): UseToastOptions => {
	return {
		description: `${name} has been ${add ? 'added to' : 'removed from'} your collection`,
		status: add ? 'success' : 'error',
		duration: 2000,
		isClosable: true,
	};
};
