import { useEffect, FC } from 'react';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { fetchArtistData } from 'src/store/artist/artist-slice';
import { selectArtist, selectArtistStatus } from 'src/store/artist/artist-slice';

import DisplayArtist from './DisplayArtist';
import DisplayAlbums from './DisplayAlbums';
import SimilarArtists from './DisplaySimilarArtists';
import { FoundArtist } from 'src/types/app-types';

import HeadingPrimary from 'src/components/headings/HeadingPrimary';
import { Skeleton, Stack } from '@chakra-ui/react';

const ArtistBlock = () => {
	const { name, albumsId, contemporaries } = useAppSelector(selectArtist);

	return (
		<>
			<HeadingPrimary>{name}</HeadingPrimary>
			<Stack
				direction={{ base: 'column', '2xl': 'row' }}
				justifyContent={{ base: 'flex-start', '2xl': 'space-around' }}
				alignItems={{ base: 'stretch', '2xl': 'flex-start' }}
				width='100%'
			>
				<Stack flex={1} direction='column' justifyContent='flex-start' alignItems={'stretch'}>
					<DisplayArtist />
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
