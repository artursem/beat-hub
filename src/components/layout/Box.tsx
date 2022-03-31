import { FC } from 'react';
import { Box as BoxChakra, BoxProps } from '@chakra-ui/react';

const Box: FC<BoxProps> = (props) => {
	return <BoxChakra {...props}>{props.children}</BoxChakra>;
};

export default Box;
