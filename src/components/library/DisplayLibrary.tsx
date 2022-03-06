import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
	selectLibraryList,
	selectLibraryStatus,
	selectLibraryArtists,
	fetchLibraryArtists,
	setLibrary,
} from './library-slice';

import LibraryItem from './LibraryItem';

const DisplayCollection = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLibrary());
	}, [dispatch]);

	const library = useAppSelector(selectLibraryList);
	useEffect(() => {
		if (!library) return;
		dispatch(fetchLibraryArtists(library));
	}, [dispatch, library]);

	const notification = useAppSelector(selectLibraryStatus);
	const libraryArtists = useAppSelector(selectLibraryArtists);

	const libraryLi = libraryArtists
		? libraryArtists.map(({ id, name, thumbnail }) => (
				<LibraryItem key={id} id={id} name={name} thumbnail={thumbnail} />
		  ))
		: null;
	const displayLibrary = library ? (
		<>
			<ul>{libraryLi}</ul>
		</>
	) : (
		<p>Your library is empty. Please add artists you enjoy</p>
	);

	return notification === 'idle' ? displayLibrary : <p>{notification} library</p>;
};

export default DisplayCollection;
