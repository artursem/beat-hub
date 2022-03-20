import { FC } from 'react';
import Li from 'src/elements/text/Li';
import List from 'src/elements/text/List';
import { Skeleton } from '@chakra-ui/react';

interface SkeletonLibraryProps {
	length: number;
}

const SkeletonLibrary = ({ length }: SkeletonLibraryProps) => {
	// const skeleton = (
	// 	<Skeleton
	// 		width={{ base: 152, md: '100%', '2xl': 152 }}
	// 		height={{ base: 250, md: '102px', '2xl': 250 }}
	// 		marginY={3}
	// 		marginX={{ base: 3, md: 0, '2xl': 3 }}
	// 		key={i}
	// 	/>
	// );
	const skeletonLis = Array.of(length).map((x, i) => (
		<Skeleton
			width={{ base: 152, md: '100%', '2xl': 152 }}
			height={{ base: 250, md: '102px', '2xl': 250 }}
			marginY={3}
			marginX={{ base: 3, md: 0, '2xl': 3 }}
			key={i}
		/>
	));
	return (
		<List>
			{skeletonLis}
			{/* <Li>{skeleton}</Li> */}
		</List>
	);
};

export default SkeletonLibrary;
