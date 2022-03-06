import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectArtist } from '../../components/displayResults/artist-slice';
import { setListIsOpen } from '../../components/musicSearch/search-slice';
import DisplayArtist from '../../components/displayResults/DisplayArtist';
import SimilarArtists from '../../components/displayResults/SimilarArtists';
import DisplayAlbums from '../../components/displayResults/DisplayAlbums';

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
			<DisplayArtist artistId={artistId} />
			{albums && <DisplayAlbums list={albums} />}
			{similar && <SimilarArtists list={similar} />}
		</>
	);
};

export default Artist;
