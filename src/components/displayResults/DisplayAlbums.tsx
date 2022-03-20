import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchAlbumsData, selectAlbums, selectAlbumsStatus } from './artist-slice';
import HeadingSecondary from '../../elements/headings/HeadingSecondary';
import List from '../../elements/text/List';
import Li from '../../elements/text/Li';
import AlbumCard from 'src/components/cards/AlbumCard';
import SkeletonAlbums from './SkeletonAlbums';

type DisplayAlbumsProps = {
	list: string[];
};

const DisplayAlbums = ({ list }: DisplayAlbumsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAlbumsData(list));
	}, [dispatch, list]);

	const notification = useAppSelector(selectAlbumsStatus);

	const albums = useAppSelector(selectAlbums);

	const albumsLi = albums
		? albums.map(({ id, name, thumbnail }) => (
				<Li key={id}>
					<AlbumCard name={name} thumbnail={thumbnail} />
				</Li>
		  ))
		: null;

	let displayAlbums = <SkeletonAlbums />;
	if (albums && notification === 'idle') {
		displayAlbums = <List>{albumsLi}</List>;
	}
	if (albums && albums.length === 0 && notification === 'idle') {
		displayAlbums = <SkeletonAlbums />;
	}
	if (notification === 'failed') {
		displayAlbums = <p>Error loading albums</p>;
	}

	return (
		<>
			<HeadingSecondary>Top albums:</HeadingSecondary>
			{displayAlbums}
		</>
	);
};

export default DisplayAlbums;
