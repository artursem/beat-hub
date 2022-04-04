import { FC } from 'react';
import { AspectRatio as AspectRatioChakra, AspectRatioProps } from '@chakra-ui/react';

const AspectRatio: FC<AspectRatioProps> = (props) => {
	return <AspectRatioChakra {...props}>{props.children}</AspectRatioChakra>;
};

export default AspectRatio;
