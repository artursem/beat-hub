import { UseToastOptions } from '@chakra-ui/react';

export const addArtistToast = (name: string): UseToastOptions => {
	return {
		description: `${name} has been added to your collection`,
		status: 'info',
		duration: 3000,
		isClosable: true,
	};
};

export const removeArtistToast = (name: string): UseToastOptions => {
	return {
		description: `${name} has been removed from your collection`,
		status: 'info',
		duration: 3000,
		isClosable: true,
	};
};
