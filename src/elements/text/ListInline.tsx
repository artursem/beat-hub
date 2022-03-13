import { FC } from 'react';
import { Box, List as ListChakra } from '@chakra-ui/react';

const ListInline: FC = ({ children }) => {
	return (
		<Box marginY={4}>
			<ListChakra width='100%' display='inline'>
				{children}
			</ListChakra>
		</Box>
	);
};

export default ListInline;
