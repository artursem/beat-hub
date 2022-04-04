import { FC } from 'react';
import { Button as ButtonChakra, ButtonProps } from '@chakra-ui/react';

const Button: FC<ButtonProps> = (props) => {
	return <ButtonChakra {...props}>{props.children}</ButtonChakra>;
};

export default Button;
