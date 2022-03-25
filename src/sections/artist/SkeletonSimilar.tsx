import { Skeleton } from '@chakra-ui/react';
import Li from 'src/components/text/Li';
import List from 'src/components/text/List';

const SkeletonSimilar = () => {
	const skeleton = (
		<Skeleton
			width={{ base: 152, md: '100%', '2xl': 152 }}
			height={{ base: 250, md: '102px', '2xl': 250 }}
			marginY={3}
			marginX={{ base: 3, md: 0, '2xl': 3 }}
		/>
	);
	return (
		<List>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
			<Li>{skeleton}</Li>
		</List>
	);
};

export default SkeletonSimilar;
