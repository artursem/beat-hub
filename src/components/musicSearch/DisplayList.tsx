import { useAppSelector } from 'src/store/hooks';
import { selectSearchResult } from './search-slice';
import OptionItem from './OptionItem';
import ListBox from 'src/elements/text/ListBox';

const DisplayList = () => {
	const searchList = useAppSelector(selectSearchResult);
	const showArtist = searchList.map(({ name, id, thumbnail }) => {
		return <OptionItem key={id} id={id} name={name} thumbnail={thumbnail} />;
	});

	return <ListBox>{showArtist}</ListBox>;
};

export default DisplayList;
