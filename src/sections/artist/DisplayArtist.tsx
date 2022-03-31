import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectArtist } from 'src/store/artist/artist-slice';
import { addArtist, removeArtist, selectLibraryList } from 'src/store/library/library-slice';
import DisplayGenres from './DisplayGenres';
import DisplayImage from './DisplayImage';

import BtnRemoveFromLib from 'src/components/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/components/buttons/BtnAddToLib';
import Box from 'src/components/layout/Box';
import Bio from 'src/components/text/Bio';
import Stack from 'src/components/layout/Stack';

const DisplayArtist = () => {
	const dispatch = useAppDispatch();
	const { id, bio } = useAppSelector(selectArtist);
	const library = useAppSelector(selectLibraryList);

	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};

	const handleAddToLibrary = () => {
		dispatch(addArtist(id));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	const libraryButton = isInLibrary(id) ? (
		<BtnRemoveFromLib onClick={handleRemoveFromLibrary} />
	) : (
		<BtnAddToLib onClick={handleAddToLibrary} />
	);

	return (
		<Stack direction='column' alignItems={{ base: 'center', '2xl': 'flex-start' }}>
			<DisplayImage />
			<Box>{libraryButton}</Box>
			<DisplayGenres />
			<Bio content={bio} />
		</Stack>
	);
};

export default DisplayArtist;
