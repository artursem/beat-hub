import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { selectArtist, selectArtistStatus } from 'src/store/artist/artist-slice';
import { setListIsOpen } from 'src/store/search/search-slice';
import HeadingSecondary from 'src/components/headings/HeadingSecondary';
import ArtistBlock from 'src/sections/artist/ArtistBlock';
import fetchArtist from 'src/store/artist/fetchArtist';
import fetchAlbums from 'src/store/artist/fetchAlbums';
import fetchSimilar from 'src/store/artist/fetchSimilar';
import { Album, FoundArtist, ListArtists } from 'src/types/app-types';

type ArtistProps = {
	foundArtist: FoundArtist;
	albums: Album;
	similar: ListArtists;
};

const Artist: NextPage<ArtistProps> = (props) => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	const artist = useAppSelector(selectArtist);
	const notification = useAppSelector(selectArtistStatus);
	const name = artist.name;

	const dispatch = useAppDispatch();
	useEffect(() => {
		console.log(props);
		dispatch(setListIsOpen(false));
	}, [artistId, dispatch, props]);

	let artistBlock = (
		<>
			<h1>{props.foundArtist.name}</h1>
			<p>{props.foundArtist.bio}</p>
		</>
	);
	// let artistBlock;
	// if (notification === 'failed') {
	// 	// set all to []
	// 	artistBlock = <HeadingSecondary>error loading artist</HeadingSecondary>;
	// } else {
	// 	artistBlock = <ArtistBlock artistId={artistId} />;
	// }

	return (
		<>
			<Head>
				<title>{name} - beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{artistBlock}
		</>
	);
};

export default Artist;

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (!context || !context.params || typeof context.params.artistId !== 'string') {
		return {
			notFound: true,
		};
	}
	const id = context.params.artistId;
	const foundArtist = await fetchArtist(id);
	const albums = foundArtist.albumsId ? await fetchAlbums(foundArtist.albumsId) : null;
	const similar = foundArtist.contemporaries
		? await fetchSimilar(foundArtist.contemporaries)
		: null;

	return {
		props: {
			foundArtist,
			albums,
			similar,
		},
	};
};
