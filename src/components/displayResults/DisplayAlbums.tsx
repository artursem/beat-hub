import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchAlbumsData, selectAlbums, selectAlbumsStatus } from '../../store/artist-slice';

type DisplayAlbumsProps = {
	list: string[];
};
const DisplayAlbums = ({ list }: DisplayAlbumsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAlbumsData(list));
	}, [dispatch, list, fetchAlbumsData]);

	const notification = useAppSelector(selectAlbumsStatus);
	const albums = useAppSelector(selectAlbums);

	const albumsLi = albums
		? albums.map(({ id, name, thumbnail }) => (
				<li key={id}>
					{thumbnail && (
						<>
							<img src={thumbnail} alt={name} width='150px' />
							<br />
						</>
					)}

					{name}
				</li>
		  ))
		: null;
	const displaySimilar = albums ? (
		<>
			<h3>top albums:</h3>
			<ul>{albumsLi}</ul>
		</>
	) : null;

	return notification === 'idle' ? displaySimilar : <p>{notification} top albums</p>;
};

export default DisplayAlbums;
