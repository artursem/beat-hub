import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import {
	selectLibraryList,
	selectLibraryStatus,
	selectLibraryArtists,
	fetchLibraryItem,
	setLibrary,
} from 'src/store/library/library-slice';
import ArtistCard from 'src/sections/app/ArtistCard';
import List from 'src/components/text/List';
import Li from 'src/components/text/Li';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';
import HeadingSecondary from 'src/components/headings/HeadingSecondary';
import SpinnerSmall from 'src/components/animations/SpinnerSmall';

const DisplayCollection = () => {
	const dispatch = useAppDispatch();
	const library = useAppSelector(selectLibraryList);
	const notification = useAppSelector(selectLibraryStatus);
	const libraryArtists = useAppSelector(selectLibraryArtists);

	useEffect(() => {
		dispatch(setLibrary());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchLibraryItem(library));
	}, [dispatch, library]);

	const libraryLi = libraryArtists
		? libraryArtists.map(({ id, name, thumbnail }) => (
				<Li key={id}>
					<ArtistCard id={id} name={name} thumbnail={thumbnail} />
				</Li>
		  ))
		: null;

	let displayLibrary = (
		<>
			<HeadingPrimary>Your Library</HeadingPrimary>
			<List>{libraryLi}</List>
			{notification === 'loading' && <SpinnerSmall />}
		</>
	);

	if (library.length === 0 && notification === 'idle') {
		displayLibrary = (
			<HeadingSecondary>Your library is empty. Please add artists you enjoy</HeadingSecondary>
		);
	}

	if (notification === 'failed') {
		displayLibrary = <p>Error loading library</p>;
	}

	return displayLibrary;
};

export default DisplayCollection;
