import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import {
	selectLibraryList,
	selectLibraryStatus,
	selectLibraryArtists,
	fetchLibraryArtists,
	setLibrary,
} from 'src/store/library/library-slice';
import ArtistCard from 'src/sections/app/ArtistCard';
import SkeletonLibrary from './SkeletonLibrary';

import List from 'src/components/text/List';
import Li from 'src/components/text/Li';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';
import HeadingSecondary from 'src/components/headings/HeadingSecondary';

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

	let displayLibrary = <SkeletonLibrary />;
	if (library.length > 0 && notification === 'idle') {
		displayLibrary = (
			<>
				<HeadingPrimary>Your Library</HeadingPrimary>
				<List>{libraryLi}</List>
			</>
		);
	}
	if (library.length === 0 && notification === 'idle') {
		displayLibrary = (
			<HeadingSecondary>Your library is empty. Please add artists you enjoy</HeadingSecondary>
		);
	}
	if (notification === 'loading') {
		displayLibrary = <SkeletonLibrary />;
	}
	if (notification === 'failed') {
		displayLibrary = <p>Error loading library</p>;
	}

	return displayLibrary;
};

export default DisplayCollection;
