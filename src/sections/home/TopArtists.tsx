import { useAppSelector } from '../../store/hooks';
import { selectTop } from 'src/store/top-artists/top-slice';
import List from 'src/components/text/List';
import Li from 'src/components/text/Li';
import ArtistCard from '../cards/ArtistCard';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';
import ListArtists from '../../types/listArtists';

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
