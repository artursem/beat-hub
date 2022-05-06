import { FC } from 'react';
import { InputRightElement as InputRightElementChakra, InputElementProps } from '@chakra-ui/react';

const InputRightElement: FC<InputElementProps> = (props) => {
	return <InputRightElementChakra {...props}>{props.children}</InputRightElementChakra>;
};

export default InputRightElement;
