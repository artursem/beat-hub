import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchSimilarData,
	selectSimilar,
	selectSimilarStatus,
	selectArtistStatus,
} from './artist-slice';

type SimilarArtistsProps = {
	list: string[];
};
const SimilarArtists = ({ list }: SimilarArtistsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSimilarData(list));
	}, [dispatch, list]);

	const notification = useAppSelector(selectSimilarStatus);
	const notificationArtist = useAppSelector(selectArtistStatus);
	const similar = useAppSelector(selectSimilar);

	const similarLi = similar
		? similar.map(({ id, name, thumbnail }) => (
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
	const displaySimilar =
		similar && notificationArtist === 'idle' ? (
			<>
				<h3>similar artists:</h3>
				<ul>{similarLi}</ul>
			</>
		) : null;

	return notification === 'idle' ? displaySimilar : <p>{notification} similar artist</p>;
};

export default SimilarArtists;
