import { FC } from 'react';
import { Skeleton as SkeletonChakra, SkeletonProps } from '@chakra-ui/react';

const Skeleton: FC<SkeletonProps> = (props) => {
	return <SkeletonChakra {...props}>{props.children}</SkeletonChakra>;
};

export default Skeleton;
