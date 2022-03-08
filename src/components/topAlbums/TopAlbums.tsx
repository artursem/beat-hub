import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTopAlbumsData, selectTopAlbums, selectTopAlbumsStatus } from './top-albums-slice';
import Album from '../../models/albums';

const TopAlbums = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTopAlbumsData());
	}, [dispatch]);

	const notification = useAppSelector(selectTopAlbumsStatus);
	const top = useAppSelector(selectTopAlbums);

	const displayTopAlbums = top.map(({ id, name, thumbnail, artist, artistId }: Album) => (
		<li key={id}>
			<Link href={`/${artistId}`}>
				<a>
					{thumbnail && <img src={thumbnail} alt={name} width='150px' />}
					<br />
					{name} by {artist}
				</a>
			</Link>
		</li>
	));
	if (notification === 'idle') {
		return (
			<>
				<h1>Top Albums</h1>
				<ul>{displayTopAlbums}</ul>
			</>
		);
	} else {
		return <p>{notification} top albums</p>;
	}
};

export default TopAlbums;
