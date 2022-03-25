import { useAppSelector } from 'src/store/hooks';
import { ListArtists } from 'src/types/app-types';
import { selectTop } from 'src/store/top-artists/top-slice';
import ArtistCard from 'src/sections/app/ArtistCard';

import List from 'src/components/text/List';
import Li from 'src/components/text/Li';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';

const TopArtists = () => {
	const top = useAppSelector(selectTop);

	const displayTopArtists = top.map(({ id, name, thumbnail }: ListArtists) => (
		<Li key={id}>
			<ArtistCard id={id} name={name} thumbnail={thumbnail} />
		</Li>
	));
	return (
		<>
			<HeadingPrimary>Top Artists</HeadingPrimary>
			<List>{displayTopArtists}</List>
		</>
	);
};

export default TopArtists;
