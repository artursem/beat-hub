import { FC } from 'react';
import { List as ListChakra } from '@chakra-ui/react';

const ListBox: FC = ({ children }) => {
	return (
		<ListChakra
			marginY='4'
			display={'flex'}
			flexDir={'column'}
			width='92vw'
			flex={1}
			position='absolute'
			m='auto'
		>
			{children}
		</ListChakra>
	);
};

export default ListBox;
