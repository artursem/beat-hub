import { Skeleton } from '@chakra-ui/react';
import Li from 'src/elements/text/Li';
import List from 'src/elements/text/List';

const SkeletonSimilar = () => {
	const skeleton = (
		<Skeleton
			width={{ base: '100%', '2xl': '152px' }}
			height={{ base: '102px', '2xl': '250px' }}
			marginY={3}
			marginX={{ base: 0, '2xl': 3 }}
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
