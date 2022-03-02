import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchSimilar } from '../../store/fetchSimilar';

type SimilarArtistsProps = {
	list: string[];
};
const SimilarArtists = ({ list }: SimilarArtistsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSimilar(list));
	}, [dispatch, list]);

	const notification = useAppSelector((state) => state.uiStatus.statusSimilar);
	const similar = useAppSelector((state) => state.search.similarDetails);

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
	const displaySimilar = similar ? (
		<>
			<h3>similar artists:</h3>
			<ul>{similarLi}</ul>
		</>
	) : null;

	return notification === 'idle' ? (
		displaySimilar
	) : (
		<p>{notification} similar artist</p>
	);
};

export default SimilarArtists;