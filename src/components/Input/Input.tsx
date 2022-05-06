import { FC } from 'react';
import { Input as InputChakra, InputProps } from '@chakra-ui/react';

const Input: FC<InputProps> = (props) => {
	return <InputChakra {...props} />;
};

export default Input;
