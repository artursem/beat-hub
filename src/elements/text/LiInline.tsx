import { FC } from 'react';
import { ListItem as ListItemChakra } from '@chakra-ui/react';

const LiInline: FC = ({ children }) => {
	return (
		<ListItemChakra display='inline' marginRight='2'>
			{children}
		</ListItemChakra>
	);
};

export default LiInline;
