import { Skeleton, Box } from '@chakra-ui/react';
import Li from 'src/components/text/Li';
import List from 'src/components/text/List';

const SkeletonAlbums = () => {
	const skeleton = (
		<Skeleton
			width={{ base: 150, md: '100%', '2xl': 150 }}
			height={{ base: 300, md: '152px', '2xl': 300 }}
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
		</List>
	);
};

export default SkeletonAlbums;
