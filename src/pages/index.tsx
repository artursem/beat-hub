import type { NextPage } from 'next';
import Head from 'next/head';
import TopArtists from '../components/displayResults/TopArtists';

import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
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
