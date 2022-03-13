import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppDispatch } from '../store/hooks';
import { setListIsOpen } from '../components/musicSearch/search-slice';
import TopArtists from '../components/topArtists/TopArtists';
import TopAlbums from '../components/topAlbums/TopAlbums';

const IndexPage: NextPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
	}, []);

	return (
		<>
			<Head>
				<title>beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TopArtists />
			<TopAlbums />
		</>
	);
};

export default IndexPage;
