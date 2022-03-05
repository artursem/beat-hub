import { useEffect } from 'react';
import Link from 'next/link';
import { fetchLibrary } from '../../store/fetchLibrary';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import librarySlice from '../../store/library-slice';

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
	// const displayArtists = library.map((art) => <li key={art}>{art}</li>);

	const libraryLi = libraryArtists
		? libraryArtists.map(({ id, name, thumbnail }) => (
				<li key={id}>
					<Link href={`/${id}`}>
						<a>
							{thumbnail && (
								<>
									<img src={thumbnail} alt={name} width='150px' />
									<br />
								</>
							)}

							{name}
						</a>
					</Link>
				</li>
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
