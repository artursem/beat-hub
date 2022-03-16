import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectArtist } from '../../components/displayResults/artist-slice';
import { setListIsOpen } from '../../components/musicSearch/search-slice';
import DisplayArtist from '../../components/displayResults/DisplayArtist';
import SimilarArtists from '../../components/displayResults/DisplaySimilarArtists';
import DisplayAlbums from '../../components/displayResults/DisplayAlbums';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';
// import Stack from 'src/elements/layout/Stack';
import { Stack } from '@chakra-ui/react';

const Artist = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	const artist = useAppSelector(selectArtist);
	const name = artist.name;
	const similar = artist.contemporaries;
	const albums = artist.albumsId;

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
	}, [artistId]);

	return (
		<>
			<Head>
				<title>{name} - beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HeadingPrimary>{name}</HeadingPrimary>
			<Stack direction={{ base: 'column', lg: 'row' }}>
				<DisplayArtist artistId={artistId} />
				<Stack direction='column'>
					{albums && <DisplayAlbums list={albums} />}
					{similar && <SimilarArtists list={similar} />}
				</Stack>
			</Stack>
		</>
	);
};

export default Artist;
