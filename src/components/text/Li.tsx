import { FC } from 'react';
import { ListItem as ListItemChakra } from '@chakra-ui/react';

const Li: FC = (props) => {
	return (
		<ListItemChakra {...props} role='listitem'>
			{props.children}
		</ListItemChakra>
	);
};

export default Li;
