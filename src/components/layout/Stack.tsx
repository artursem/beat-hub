import { FC } from 'react';
import { Stack as StackChakra, StackProps } from '@chakra-ui/react';

const Stack: FC<StackProps> = (props) => {
	return <StackChakra {...props}>{props.children}</StackChakra>;
};

export default Stack;
