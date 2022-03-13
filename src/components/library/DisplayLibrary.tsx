import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
	selectLibraryList,
	selectLibraryStatus,
	selectLibraryArtists,
	fetchLibraryArtists,
	setLibrary,
} from './library-slice';
import ArtistCard from '../cards/ArtistCard';
import List from 'src/elements/text/List';
import Li from 'src/elements/text/Li';
import HeadingPrimary from 'src/elements/headings/HeadingPrimary';
import HeadingSecondary from 'src/elements/headings/HeadingSecondary';

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
				<Li key={id}>
					<ArtistCard id={id} name={name} thumbnail={thumbnail} />
				</Li>
		  ))
		: null;
	const displayLibrary =
		library.length > 0 ? (
			<>
				<HeadingPrimary>Your Library</HeadingPrimary>
				<List>{libraryLi}</List>
			</>
		) : (
			<HeadingSecondary>Your library is empty. Please add artists you enjoy</HeadingSecondary>
		);

	return notification === 'idle' ? displayLibrary : <p>{notification} library</p>;
};

export default DisplayCollection;
