import { FC } from 'react';
import { List as ListChakra } from '@chakra-ui/react';

const List: FC = ({ children }) => {
	return <ListChakra marginY='4'>{children}</ListChakra>;
};

export default List;
