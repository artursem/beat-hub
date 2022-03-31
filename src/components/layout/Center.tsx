import { FC } from 'react';
import { Center as CenterChakra, CenterProps } from '@chakra-ui/react';

const Center: FC<CenterProps> = (props) => {
	return <CenterChakra {...props}>{props.children}</CenterChakra>;
};

export default Center;
