import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppDispatch } from '../store/hooks';
import fetchTop from '../components/topArtists/fetchTop';
import fetchTopAlbums from '../components/topAlbums/fetchTopAlbums';
import { setTopAlbums } from 'src/components/topAlbums/top-albums-slice';
import { setTopArtists } from 'src/components/topArtists/top-slice';
import { setListIsOpen } from '../components/musicSearch/search-slice';
import TopArtists from '../components/topArtists/TopArtists';
import TopAlbums from '../components/topAlbums/TopAlbums';
import ListArtists from 'types/listArtists';
import Albums from 'types/albums';

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

export async function getServerSideProps() {
	const topArtists = await fetchTop();
	const topAlbums = await fetchTopAlbums();
	return {
		props: {
			topArtists,
			topAlbums,
		},
	};
}
