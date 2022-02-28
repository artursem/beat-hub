import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTop } from '../../store/fetchTop';

const TopArtists = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchTop());
	}, [dispatch]);

	const top = useAppSelector((state) => state.search.topArtists);
	console.log(top);
	const displayTopArtists = top.map(({ id, name }) => (
		<li key={id}>
			<Link href={`/${id}`}>
				<a>{name}</a>
			</Link>
		</li>
	));
	return (
		<>
			<h2>TopArtists</h2>
			<ul>{displayTopArtists}</ul>
		</>
	);
};

export default TopArtists;
