import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppDispatch } from '../store/hooks';
import { setListIsOpen } from '../components/musicSearch/search-slice';
import TopArtists from '../components/topArtists/TopArtists';
import TopAlbums from '../components/topAlbums/TopAlbums';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TopArtists />
			<TopAlbums />
		</div>
	);
};

export default IndexPage;
