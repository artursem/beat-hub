import { FC } from 'react';
import Li from 'src/components/text/Li';
import List from 'src/components/text/List';
import Skeleton from 'src/components/layout/Skeleton';

interface SkeletonLibraryProps {
	length: number;
}

const SkeletonLibrary: FC<SkeletonLibraryProps> = ({ length }) => {
	const skeletonArr = [...Array(length)].map((x, i) => {
		return (
			<Li key={i}>
				<Skeleton
					width={{ base: 152, md: '100%', '2xl': 152 }}
					height={{ base: 250, md: '102px', '2xl': 250 }}
					marginY={3}
					marginX={{ base: 3, md: 2, '2xl': 3 }}
				/>
			</Li>
		);
	});

	return <List>{skeletonArr}</List>;
};

export default SkeletonLibrary;
