import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import DisplayArtist from '../../components/displayResults/DisplayArtist';
import SimilarArtists from '../../components/displayResults/SimilarArtists';
import { uiActions } from '../../store/ui-slice';

const Artist = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	const similar = useAppSelector((state) => state.search.similarId);
	const { name } = useAppSelector((state) => state.search.displayArtist);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(uiActions.setListIsOpen(false));
	}, [artistId]);

	return (
		<>
			<Head>
				<title>{name} - beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<DisplayArtist artistId={artistId} />
			{similar && <SimilarArtists list={similar} />}
		</>
	);
};

export default Artist;
