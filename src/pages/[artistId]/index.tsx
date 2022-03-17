import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectArtist, selectArtistStatus } from '../../components/displayResults/artist-slice';
import { setListIsOpen } from '../../components/musicSearch/search-slice';
import DisplayArtist from '../../components/displayResults/DisplayArtist';
import SimilarArtists from '../../components/displayResults/DisplaySimilarArtists';
import DisplayAlbums from '../../components/displayResults/DisplayAlbums';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';
// import Stack from 'src/elements/layout/Stack';
import { Stack, Skeleton } from '@chakra-ui/react';
import HeadingSecondary from 'src/elements/headings/HeadingSecondary';

const Artist = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	const artist = useAppSelector(selectArtist);
	const notification = useAppSelector(selectArtistStatus);
	const name = artist.name;
	const similar = artist.contemporaries;
	const albums = artist.albumsId;

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
	}, [artistId]);

	let artistBlock;
	if (notification === 'failed') {
		// set all to []
		artistBlock = <HeadingSecondary>error loading artist</HeadingSecondary>;
	} else {
		artistBlock = (
			<>
				<Head>
					<title>{name} - beathub</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Skeleton width='60%' isLoaded={notification === 'idle'}>
					<HeadingPrimary>{name}</HeadingPrimary>
				</Skeleton>
				<Stack
					direction={{ base: 'column', lg: 'row' }}
					justifyContent={{ base: 'flex-start', lg: 'space-around' }}
					alignItems={{ base: 'center', lg: 'flex-start' }}
					width='100%'
				>
					<Stack flex={1} direction='column' justifyContent={'flex-start'} alignItems={'stretch'}>
						<DisplayArtist artistId={artistId} />
					</Stack>

					<Stack
						direction='column'
						justifyContent={'flex-start'}
						alignItems={'stretch'}
						flex={1}
						width='100%'
					>
						{albums && <DisplayAlbums list={albums} />}
						{similar && <SimilarArtists list={similar} />}
					</Stack>
				</Stack>
			</>
		);
	}

	return <>{artistBlock}</>;
};

export default Artist;
