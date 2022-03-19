import { FC } from 'react';
import { ListItem as ListItemChakra } from '@chakra-ui/react';

const Li: FC = (props) => {
	return <ListItemChakra {...props}> {props.children}</ListItemChakra>;
};

export default Li;
