import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtistData, selectArtist, selectArtistStatus } from './artist-slice';
import { addArtist, removeArtist, selectLibraryList } from '../library/library-slice';
import DisplayGenres from './DisplayGenres';
import BtnRemoveFromLib from 'src/elements/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/elements/buttons/BtnAddToLib';
import ImgArtist from 'src/elements/images/ImgArtist';
import Box from 'src/elements/text/Box';
import Bio from 'src/elements/text/Bio';
import SkeletonArtist from './SkeletonArtist';
// import Stack from 'src/elements/layout/Stack';
import { Stack } from '@chakra-ui/react'; // import

type DisplayArtistProps = {
	artistId: string;
};

const DisplayArtist = ({ artistId }: DisplayArtistProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchArtistData(artistId));
	}, [dispatch, artistId]);

	const notification = useAppSelector(selectArtistStatus);
	const { id, bio, genres, image } = useAppSelector(selectArtist);
	const library = useAppSelector(selectLibraryList);

	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};

	const handleAddToLibrary = () => {
		dispatch(addArtist(artistId));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	const libraryButton = isInLibrary(id) ? (
		<BtnRemoveFromLib onClick={handleRemoveFromLibrary} />
	) : (
		<BtnAddToLib onClick={handleAddToLibrary} />
	);

	let artistData = <SkeletonArtist />;
	if (notification === 'idle') {
		artistData = (
			<Stack direction='column' alignItems={{ base: 'center', '2xl': 'flex-start' }}>
				<Box>
					{image && <ImgArtist src={image} alt={id} />}
					<Box>{libraryButton}</Box>
					{genres && <DisplayGenres genres={genres} />}
				</Box>
				<Bio content={bio} />
			</Stack>
		);
	}
	if (notification === 'loading') {
		artistData = <SkeletonArtist />;
	}
	if (notification === 'failed') {
		artistData = <p>Error loading artist</p>;
	}

	return artistData;
};

export default DisplayArtist;
