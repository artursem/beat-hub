import { FC } from 'react';
import { List as ListChakra, ListProps } from '@chakra-ui/react';

const ListBox: FC<ListProps> = ({ children }) => {
	return (
		<ListChakra
			marginY='4'
			display={'flex'}
			flexDir={'column'}
			width='93vw'
			flex={1}
			position='absolute'
			m='auto'
			zIndex={2}
		>
			{children}
		</ListChakra>
	);
};

export default ListBox;
