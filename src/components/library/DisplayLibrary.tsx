import { useEffect } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import librarySlice from '../../store/library-slice';
import { libraryActions } from '../../store/library-slice';
import { fetchLibrary } from '../../store/fetchLibrary';
import LibraryItem from './LibraryItem';

const DisplayCollection = () => {
	const dispatch = useAppDispatch();
	const library = useAppSelector((state) => state.library.libraryId);
	useEffect(() => {
		if (!library) return;
		dispatch(fetchLibrary(library));
	}, [dispatch, library]);

	const notification = useAppSelector((state) => state.uiStatus.statusLibrary);
	const libraryArtists = useAppSelector(
		(state) => state.library.libraryArtists
	);

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

	return notification === 'idle' ? (
		displayLibrary
	) : (
		<p>{notification} library</p>
	);
};

export default DisplayCollection;
