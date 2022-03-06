import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTopData, selectTop, selectTopStatus } from '../../store/top-slice';

const TopArtists = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTopData());
	}, [dispatch]);

	const notification = useAppSelector(selectTopStatus);
	const top = useAppSelector(selectTop);

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
				<h1>Top Artists</h1>
				<ul>{displayTopArtists}</ul>
			</>
		);
	} else {
		return <p>{notification} top artists</p>;
	}
};

export default TopArtists;
