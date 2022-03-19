import { FC, ReactNode } from 'react';
import { Stack as StackChakra } from '@chakra-ui/react';

const Stack: FC = (props) => {
	return (
		// <StackChakra {...props} direction={props.direction}>
		<StackChakra {...props}>{props.children}</StackChakra>
	);
};

export default Stack;
