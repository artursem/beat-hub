import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppDispatch } from '../store/hooks';
import { uiActions } from '../store/ui-slice';
import { libraryActions } from '../store/library-slice';
import TopArtists from '../components/topArtists/TopArtists';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(uiActions.setListIsOpen(false));
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TopArtists />
		</div>
	);
};

export default IndexPage;
