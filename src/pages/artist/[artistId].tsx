import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useAppDispatch } from 'src/store/hooks';
import { setDisplayArtist } from 'src/store/artist/artist-slice';
import { setListIsOpen } from 'src/store/search/search-slice';
import ArtistBlock from 'src/sections/artist/ArtistBlock';
import fetchArtist from 'src/store/artist/fetchArtist';

import { Album, FoundArtist, ListArtists } from 'src/types/app-types';

type ArtistProps = {
	foundArtist: FoundArtist;
	albums: Album;
	similar: ListArtists;
};

const Artist: NextPage<ArtistProps> = (props) => {
	const { foundArtist } = props;

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
		dispatch(setDisplayArtist(foundArtist));
	}, [foundArtist, dispatch]);

	return (
		<>
			<Head>
				<title>{foundArtist.name} - beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ArtistBlock />
		</>
	);
};

export default Artist;

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (!context || !context.params || typeof context.params.artistId !== 'string') {
		return {
			notFound: true,
			// redirect
		};
	}
	const id = context.params.artistId;
	const foundArtist = await fetchArtist(id);

	return {
		props: {
			foundArtist,
		},
	};
};
