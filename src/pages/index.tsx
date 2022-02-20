import type { NextPage } from 'next';
import Head from 'next/head';
import DisplayArtist from '../features/displayResults/DisplayArtist';

import SearchBox from '../features/musicSearch/SearchBox';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Redux Toolkit</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>
				<SearchBox />
			</header>
			<DisplayArtist />
		</div>
	);
};

export default IndexPage;
