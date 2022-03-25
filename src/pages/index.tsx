import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import fetchTop from '../store/top-artists/fetchTop';
import fetchTopAlbums from '../store/top-albums/fetchTopAlbums';
import { setTopAlbums } from 'src/store/top-albums/top-albums-slice';
import { setTopArtists } from 'src/store/top-artists/top-slice';
import { setListIsOpen } from 'src/store/search/search-slice';
import TopArtists from '../sections/home/TopArtists';
import TopAlbums from '../sections/home/TopAlbums';
import ListArtists from 'src/types/listArtists';
import Albums from 'src/types/albums';

interface IndexPageProps {
	topArtists: ListArtists[];
	topAlbums: Albums[];
}

const IndexPage = ({ topAlbums, topArtists }: IndexPageProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
		dispatch(setTopArtists(topArtists));
		dispatch(setTopAlbums(topAlbums));
	}, [dispatch, topAlbums, topArtists]);

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

export const getStaticProps: GetStaticProps = async () => {
	const topArtists = await fetchTop();
	const topAlbums = await fetchTopAlbums();

	// if (!topAlbums || !topArtists) {
	// 	return {
	// 		redirect: {
	// 			destination: '/library',
	// 			permanent: false,
	// 			// statusCode: 301
	// 		},
	// 	};
	// }

	return {
		props: {
			topArtists,
			topAlbums,
		},
		revalidate: 3600,
	};
};
