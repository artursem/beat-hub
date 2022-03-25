import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { fetchArtistData } from 'src/store/artist/artist-slice';
import { selectArtist, selectArtistStatus } from 'src/store/artist/artist-slice';
import { addArtist, removeArtist, selectLibraryList } from 'src/store/library/library-slice';
import DisplayArtist from './DisplayArtist';
import DisplayAlbums from './DisplayAlbums';
import SimilarArtists from './DisplaySimilarArtists';

import BtnAddToLib from 'src/components/buttons/BtnAddToLib';
import BtnRemoveFromLib from 'src/components/buttons/BtnRemoveFromLib';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';
import { Skeleton, Stack } from '@chakra-ui/react';

interface ArtistBlockProps {
	artistId: string;
}

const ArtistBlock = ({ artistId }: ArtistBlockProps) => {
	const dispatch = useAppDispatch();
	const { id, name, albumsId, contemporaries } = useAppSelector(selectArtist);
	useEffect(() => {
		dispatch(fetchArtistData(artistId));
	}, [dispatch, artistId]);

	const notification = useAppSelector(selectArtistStatus);
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

	return (
		<>
			<Skeleton width='60%' isLoaded={notification === 'idle'} my={2}>
				<HeadingPrimary>{name}</HeadingPrimary>
			</Skeleton>
			<Stack
				direction={{ base: 'column', '2xl': 'row' }}
				justifyContent={{ base: 'flex-start', '2xl': 'space-around' }}
				alignItems={{ base: 'stretch', '2xl': 'flex-start' }}
				width='100%'
			>
				<Stack flex={1} direction='column' justifyContent='flex-start' alignItems={'stretch'}>
					<DisplayArtist artistId={artistId} />
				</Stack>

				<Stack
					direction='column'
					justifyContent={'flex-start'}
					alignItems={'stretch'}
					flex={1}
					width='100%'
				>
					{albumsId && <DisplayAlbums list={albumsId} />}
					{contemporaries && <SimilarArtists list={contemporaries} />}
				</Stack>
			</Stack>
		</>
	);
};

export default ArtistBlock;
