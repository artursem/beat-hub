import { useRouter } from 'next/router';
import DisplayArtist from '../../features/displayResults/DisplayArtist';

const Artist = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);

	return <DisplayArtist artistId={artistId} />;
};

export default Artist;
