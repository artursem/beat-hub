import { FC } from 'react';
import { SkeletonText as SkeletonTextChakra, SkeletonTextProps } from '@chakra-ui/react';

const SkeletonText: FC<SkeletonTextProps> = (props) => {
	return <SkeletonTextChakra {...props} />;
};

export default SkeletonText;
