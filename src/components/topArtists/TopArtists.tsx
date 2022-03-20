import { useAppSelector } from '../../store/hooks';
import { selectTop } from './top-slice';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';
import ArtistCard from '../cards/ArtistCard';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';
import ListArtists from '../../models/listArtists';

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
