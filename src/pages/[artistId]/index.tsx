import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectArtist, selectArtistStatus } from '../../store/artist/artist-slice';
import { setListIsOpen } from 'src/store/search/search-slice';
import HeadingSecondary from 'src/components/headings/HeadingSecondary';
import ArtistBlock from 'src/sections/artist/ArtistBlock';

const Artist: NextPage = () => {
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	const artist = useAppSelector(selectArtist);
	const notification = useAppSelector(selectArtistStatus);
	const name = artist.name;

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setListIsOpen(false));
	}, [artistId, dispatch]);

	let artistBlock;
	if (notification === 'failed') {
		// set all to []
		artistBlock = <HeadingSecondary>error loading artist</HeadingSecondary>;
	} else {
		artistBlock = <ArtistBlock artistId={artistId} />;
	}

	return (
		<>
			<Head>
				<title>{name} - beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{artistBlock}
		</>
	);
};

export default Artist;
