import { FC } from 'react';
import { Box as BoxChakra } from '@chakra-ui/react';

const Box: FC = (props) => {
	return <BoxChakra {...props}>{props.children}</BoxChakra>;
};

export default Box;
