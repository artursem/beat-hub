import Li from 'src/elements/text/Li';
import List from 'src/elements/text/List';
import { Skeleton } from '@chakra-ui/react';

const SkeletonLibrary = () => {
	const skeletonLis = (
		<Li key={1}>
			<Skeleton
				width={{ base: 152, md: '100%', '2xl': 152 }}
				height={{ base: 250, md: '102px', '2xl': 250 }}
				marginY={3}
				marginX={{ base: 3, md: 2, '2xl': 3 }}
			/>
		</Li>
	);
	return <List>{skeletonLis}</List>;
};

export default SkeletonLibrary;
