import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import {
	// fetchSearchImages,
	// selectSearchImages,

	selectSearchResult,
} from 'src/store/search/search-slice';
import OptionItem from './OptionItem';
import ListBox from 'src/components/text/ListBox';

const DisplayList = () => {
	const searchList = useAppSelector(selectSearchResult);
	// const searchImages = useAppSelector(selectSearchImages);
	// const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	if (searchList) {
	// 		dispatch(fetchDataAndThumbnails(idList));
	// 	}
	// }, [dispatch, searchList]);

	const showArtist =
		searchList &&
		searchList.map(({ name, id, thumbnail }) => {
			return <OptionItem key={id} id={id} name={name} thumbnail={thumbnail} />;
		});

	return <ListBox>{showArtist}</ListBox>;
};

export default DisplayList;
