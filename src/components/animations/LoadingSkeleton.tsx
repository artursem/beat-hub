import { FC } from 'react';
import { Skeleton } from '@chakra-ui/react';

const LoadingSkeleton: FC = (props) => {
	return <Skeleton {...props} />;
};

export default LoadingSkeleton;
