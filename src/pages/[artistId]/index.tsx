import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchArtist } from '../../store/search-actions';

const Post = () => {
	const dispatch = useAppDispatch();
	const foundArtist = useAppSelector((state) => state.search.displayArtist);
	const { id, name, bio, contemporaries, genres, image } = foundArtist;
	const router = useRouter();
	const artistId: string = router.asPath.slice(1);
	// console.log(artistId);
	useEffect(() => {
		dispatch(fetchArtist(artistId));
	}, [dispatch]);

	return (
		<section>
			<h1>{name}</h1>
			<h4>artist: {id}</h4>
			<img src={image} alt={id} />
			<ul>
				{genres.map((gen) => (
					<li key={gen}>{gen} </li>
				))}
			</ul>
			<p>{bio}</p>
			<ul>
				{contemporaries.map((con) => (
					<li key={con}>{con}</li>
				))}
			</ul>
		</section>
	);
};

export default Post;
