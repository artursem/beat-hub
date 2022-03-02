import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../store/hooks';
import DisplayArtist from '../../components/displayResults/DisplayArtist';
import SimilarArtists from '../../components/displayResults/SimilarArtists';

const Artist = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	const similar = useAppSelector((state) => state.search.similarId);

	return (
		<>
			<Head>
				{/* fetch artist name */}
				<title>beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<DisplayArtist artistId={artistId} />
			{similar && <SimilarArtists list={similar} />}
		</>
	);
};

export default Artist;
