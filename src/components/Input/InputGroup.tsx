import { FC } from 'react';
import { InputGroup as InputGrupChakra, InputGroupProps } from '@chakra-ui/react';

const InputGroup: FC<InputGroupProps> = (props) => {
	return <InputGrupChakra>{props.children}</InputGrupChakra>;
};

export default InputGroup;
