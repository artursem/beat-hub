import { Skeleton, Box } from '@chakra-ui/react';
import Li from 'src/elements/text/Li';
import List from 'src/elements/text/List';

const SkeletonSimilar = () => {
	const skeleton = (
		<Skeleton
			width={{ base: '100%', lg: '152px' }}
			height={{ base: '102px', lg: '250px' }}
			marginY={3}
			marginX={{ base: 0, lg: 3 }}
		/>
	);
	return (
		<List>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
		</List>
	);
};

export default SkeletonSimilar;
