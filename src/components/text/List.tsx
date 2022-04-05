import { FC } from 'react';
import { List as ListChakra, ListProps } from '@chakra-ui/react';

const List: FC<ListProps> = ({ children }) => {
	return (
		<ListChakra
			marginY='4'
			display={'flex'}
			flexDir={{ base: 'row', md: 'column', '2xl': 'row' }}
			justifyContent='center'
			alignItems={{ base: 'flex-start', md: 'stretch', '2xl': 'center' }}
			width='100%'
			flex={2}
			flexWrap={'wrap'}
			// border='solid 1px pink'
		>
			{children}
		</ListChakra>
	);
};

export default List;
