import { FC } from 'react';
import { List as ListChakra } from '@chakra-ui/react';

const List: FC = ({ children }) => {
	return (
		<ListChakra
			marginY='4'
			display={'flex'}
			flexDir={{ base: 'column', '2xl': 'row' }}
			justifyContent='center'
			alignItems={{ base: 'center', md: 'stretch', '2xl': 'center' }}
			width='100%'
			flex={2}
			// border='solid 1px pink'
		>
			{children}
		</ListChakra>
	);
};

export default List;
