// import { Stack, Skeleton, SkeletonText } from '@chakra-ui/react';
import Stack from 'src/components/layout/Stack';
import Skeleton from 'src/components/layout/Skeleton';
import SkeletonText from 'src/components/layout/SkeletonText';

const SkeletonArtist = () => {
	return (
		<Stack dir='column' alignItems='stretch' minH='700px' my={2} spacing={2}>
			<Skeleton h={600} w='100%' />
			<SkeletonText mt='2' noOfLines={1} spacing='2' />
			<SkeletonText mt='2' noOfLines={10} spacing='2' />
		</Stack>
	);
};

export default SkeletonArtist;
