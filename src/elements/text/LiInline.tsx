import { FC } from 'react';
import { ListItem as ListItemChakra } from '@chakra-ui/react';

const LiInline: FC = ({ children }) => {
	return <ListItemChakra display='inline'>{children}</ListItemChakra>;
};

export default LiInline;
