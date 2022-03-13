import { FC } from 'react';
import { Box as BoxChakra } from '@chakra-ui/react';

const Box: FC = ({ children }) => {
	return <BoxChakra>{children}</BoxChakra>;
};

export default Box;
