import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchAlbumsData,
	selectAlbums,
	selectAlbumsStatus,
	selectArtistStatus,
} from './artist-slice';
import HeadingSecondary from '../../elements/headings/HeadingSecondary';
import List from '../../elements/text/List';
import Li from '../../elements/text/Li';
import AlbumCard from 'src/elements/cards/AlbumCard';

type DisplayAlbumsProps = {
	list: string[];
};

const DisplayAlbums = ({ list }: DisplayAlbumsProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAlbumsData(list));
	}, [dispatch, list, fetchAlbumsData]);

	const notification = useAppSelector(selectAlbumsStatus);
	const notificationArtist = useAppSelector(selectArtistStatus);
	const albums = useAppSelector(selectAlbums);

	const albumsLi = albums
		? albums.map(({ id, name, thumbnail }) => (
				<AlbumCard key={id} name={name} thumbnail={thumbnail} />
		  ))
		: null;
	const displaySimilar =
		albums && notificationArtist === 'idle' ? (
			<>
				<HeadingSecondary>Top albums:</HeadingSecondary>
				<List>{albumsLi}</List>
			</>
		) : null;

	return notification === 'idle' ? displaySimilar : <p>{notification} top albums</p>;
};

export default DisplayAlbums;
