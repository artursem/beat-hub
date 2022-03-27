import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useAppDispatch } from 'src/store/hooks';
import { setInitialArtist } from 'src/store/artist/artist-slice';
import { setListIsOpen } from 'src/store/search/search-slice';
import ArtistBlock from 'src/sections/artist/ArtistBlock';
import fetchInitialArtist from 'src/store/artist/fetchInitialArtist';

import { Album, InitialArtist, ListArtists } from 'src/types/app-types';

type ArtistProps = {
	initialArtist: InitialArtist;
};

const Artist: NextPage<ArtistProps> = (props) => {
	const { initialArtist } = props;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setListIsOpen(false));
		dispatch(setInitialArtist(initialArtist));
	}, [initialArtist, dispatch]);

	return (
		<>
			<Head>
				<title>{initialArtist.name} - beathub</title>
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
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	try {
		const id = context.params.artistId;
		const initialArtist = await fetchInitialArtist(id);
		return {
			props: {
				initialArtist,
			},
		};
	} catch (error) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
};
