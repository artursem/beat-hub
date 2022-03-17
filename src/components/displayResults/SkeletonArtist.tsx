import { Stack, Skeleton, SkeletonText } from '@chakra-ui/react';

const SkeletonArtist = () => {
	return (
		<Stack dir='column'>
			<Skeleton height={600} />
			<SkeletonText mt='2' noOfLines={1} spacing='2' />
			<SkeletonText mt='2' noOfLines={10} spacing='2' />
		</Stack>
	);
};

export default SkeletonArtist;
