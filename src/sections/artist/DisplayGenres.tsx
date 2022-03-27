import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { selectArtist, selectGenres } from 'src/store/artist/artist-slice';

import ListInline from 'src/components/text/ListInline';
import Genre from 'src/components/text/Genre';
import LiInline from 'src/components/text/LiInline';
import fetchGenres from 'src/store/artist/fetchGenres';

const DisplayGenres = () => {
	const dispatch = useAppDispatch();
	const { genresLink } = useAppSelector(selectArtist);
	const genres = useAppSelector(selectGenres);

	useEffect(() => {
		if (genresLink) {
			fetchGenres(genresLink);
		}
	}, [genresLink]);

	return (
		<ListInline>
			{genres &&
				genres.map((gen) => (
					<LiInline key={gen}>
						<Genre gen={gen} />
					</LiInline>
				))}
		</ListInline>
	);
};

export default DisplayGenres;
