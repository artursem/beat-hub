import Head from 'next/head';
import { useRouter } from 'next/router';
import DisplayArtist from '../../components/displayResults/DisplayArtist';

const Artist = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);

	return (
		<>
			<Head>
				{/* fetch artist name */}
				<title>beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<DisplayArtist artistId={artistId} />
		</>
	);
};

export default Artist;
