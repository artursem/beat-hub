import { FC } from 'react';
import { ListItem as ListItemChakra } from '@chakra-ui/react';

const Li: FC = ({ children }) => {
	return <ListItemChakra width='100%'> {children}</ListItemChakra>;
};

export default Li;
