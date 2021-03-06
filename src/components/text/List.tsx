import { FC } from 'react';
import { List as ListChakra, ListProps } from '@chakra-ui/react';

const List: FC<ListProps> = ({ children }) => {
	return (
		<ListChakra
			display={'flex'}
			flexDir={{ base: 'row', md: 'column', '2xl': 'row' }}
			// justifyContent='center'
			justifyContent={{ base: 'center', md: 'flex-start', '2xl': 'center' }}
			alignItems={{ base: 'flex-start', md: 'stretch', '2xl': 'flex-start' }}
			width='100%'
			flex={2}
			flexWrap={'wrap'}
		>
			{children}
		</ListChakra>
	);
};

export default List;
