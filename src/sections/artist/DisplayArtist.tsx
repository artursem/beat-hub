import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectArtist, selectArtistStatus } from 'src/store/artist/artist-slice';
import { addArtist, removeArtist, selectLibraryList } from 'src/store/library/library-slice';
import DisplayGenres from './DisplayGenres';
import DisplayImage from './DisplayImage';
import { useToast } from '@chakra-ui/react';
import { artistToast } from 'src/components/animations/Toast';
import BtnRemoveFromLib from 'src/components/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/components/buttons/BtnAddToLib';
import Box from 'src/components/layout/Box';
import Bio from 'src/components/text/Bio';
import Stack from 'src/components/layout/Stack';
import SkeletonArtist from './SkeletonArtist';
import HeadingSecondary from 'src/components/headings/HeadingSecondary';

const DisplayArtist = () => {
	const dispatch = useAppDispatch();
	const { id, bio, name } = useAppSelector(selectArtist);
	const library = useAppSelector(selectLibraryList);
	const notification = useAppSelector(selectArtistStatus);
	const toast = useToast();

	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};

	const handleAddToLibrary = () => {
		dispatch(addArtist(id));
		toast(artistToast(name, true));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
		toast(artistToast(name, false));
	};

	const libraryButton = isInLibrary(id) ? (
		<BtnRemoveFromLib onClick={handleRemoveFromLibrary} />
	) : (
		<BtnAddToLib onClick={handleAddToLibrary} />
	);

	let artist = <SkeletonArtist />;

	if (id.length > 0 && bio.length > 0 && notification === 'idle') {
		artist = (
			<Stack direction='column' alignItems={{ base: 'center', '2xl': 'flex-start' }}>
				<DisplayImage />
				<Box>{libraryButton}</Box>
				<DisplayGenres />
				<Bio content={bio} />
			</Stack>
		);
	}

	if (notification === 'failed') {
		artist = <HeadingSecondary>Failed to find artist</HeadingSecondary>;
	}

	return artist;
};

export default DisplayArtist;
