import { Skeleton, Box } from '@chakra-ui/react';
import Li from 'src/elements/text/Li';
import List from 'src/elements/text/List';

const SkeletonAlbums = () => {
	const skeleton = (
		<Skeleton
			width={{ base: '100%', '2xl': '150px' }}
			height={{ base: '152px', '2xl': '300px' }}
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

export default SkeletonAlbums;
