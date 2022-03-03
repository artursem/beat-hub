import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchAlbums } from '../../store/fetchAlbums';

type DisplayAlbumsProps = {
	list: string[];
};
const DisplayAlbums = ({ list }: DisplayAlbumsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAlbums(list));
	}, [dispatch, list]);

	const notification = useAppSelector((state) => state.uiStatus.statusAlbums);
	const albums = useAppSelector((state) => state.search.albumsDetails);

	const albumsLi = albums
		? albums.map(({ id, name, thumbnail }) => (
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
	const displaySimilar = albums ? (
		<>
			<h3>top albums:</h3>
			<ul>{albumsLi}</ul>
		</>
	) : null;

	return notification === 'idle' ? (
		displaySimilar
	) : (
		<p>{notification} top albums</p>
	);
};

export default DisplayAlbums;
