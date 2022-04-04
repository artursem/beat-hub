import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectArtist, fetchImageData, selectImage } from 'src/store/artist/artist-slice';
import ImgArtist from 'src/components/images/ImgArtist';

import { Skeleton } from '@chakra-ui/react'; // IMPORT!

const DisplayImage = () => {
	const dispatch = useAppDispatch();
	const { id, name } = useAppSelector(selectArtist);
	const src = useAppSelector(selectImage);
	const notification = src !== null; // image loading state?

	useEffect(() => {
		dispatch(fetchImageData(id));
	}, [dispatch, id]);
	return src ? (
		// <Skeleton height={600}>
		<ImgArtist src={src} alt={name} />
	) : // </Skeleton>
	null;
};

export default DisplayImage;
