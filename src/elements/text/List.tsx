import { FC } from 'react';
import { List as ListChakra } from '@chakra-ui/react';

const List: FC = ({ children }) => {
	return (
		<ListChakra
			marginY='4'
			display={'flex'}
			flexDir={{ base: 'column', lg: 'row' }}
			width='100%'
			flex={1}
		>
			{children}
		</ListChakra>
	);
};

export default List;
