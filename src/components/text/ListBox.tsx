import { FC } from 'react';
import { List as ListChakra, ListProps } from '@chakra-ui/react';

const ListBox: FC<ListProps> = ({ children }) => {
	return (
		<ListChakra
			marginY={4}
			marginX={20}
			display={'flex'}
			flexDir={'column'}
			width='calc(100vw - 40px)'
			flex={1}
			position='absolute'
			zIndex={2}
			top='50px'
			left='-60px'
		>
			{children}
		</ListChakra>
	);
};

export default ListBox;
