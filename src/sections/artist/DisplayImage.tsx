import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
	selectArtist,
	fetchImageData,
	selectImage,
	selectImageStatus,
} from 'src/store/artist/artist-slice';

import ImgArtist from 'src/components/images/ImgArtist';
import Skeleton from 'src/components/layout/Skeleton';

const DisplayImage = () => {
	const dispatch = useAppDispatch();
	const { id, name } = useAppSelector(selectArtist);
	const src = useAppSelector(selectImage);
	const notification = useAppSelector(selectImageStatus);

	useEffect(() => {
		dispatch(fetchImageData(id));
	}, [dispatch, id]);

	let image = <Skeleton h={500} w={{ base: '100%', md: '500px', '2xl': '100%' }} mb={5} />;
	if (notification === 'loading') {
		image = <Skeleton h={500} w={{ base: '100%', md: '500px', '2xl': '100%' }} mb={5} />;
	}
	if (notification === 'idle' && src && src.length > 0) {
		image = <ImgArtist src={src} alt={name} />;
	}
	if (notification === 'failed' || src === null) {
		image = <></>;
	}

	return image;
};
export default DisplayImage;
