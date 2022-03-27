import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectArtist, fetchImageData, selectImage } from 'src/store/artist/artist-slice';
import ImgArtist from 'src/components/images/ImgArtist';

const DisplayImage = () => {
	const dispatch = useAppDispatch();
	const { id, name } = useAppSelector(selectArtist);
	const src = useAppSelector(selectImage);

	useEffect(() => {
		dispatch(fetchImageData(id));
	}, [dispatch, id]);
	return src ? <ImgArtist src={src} alt={name} /> : null;
};

export default DisplayImage;
