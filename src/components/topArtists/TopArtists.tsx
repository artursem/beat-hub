import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTop } from '../../store/fetchTop';

const TopArtists = () => {
	const notification = useAppSelector((state) => state.uiStatus.statusArtist);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTop());
	}, [dispatch]);

	const top = useAppSelector((state) => state.search.topArtists);
	const displayTopArtists = top.map(({ id, name, thumbnail }) => (
		<li key={id}>
			<Link href={`/${id}`}>
				<a>
					{thumbnail && <img src={thumbnail} alt={name} width='150px' />}
					<br />
					{name}
				</a>
			</Link>
		</li>
	));
	if (notification === 'idle') {
		return (
			<>
				<h2>Top Artists</h2>
				<ul>{displayTopArtists}</ul>
			</>
		);
	} else {
		return <p>{notification} top artists</p>;
	}
};

export default TopArtists;
