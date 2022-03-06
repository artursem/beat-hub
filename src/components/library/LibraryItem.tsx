import Link from 'next/link';
import ListArtists from '../../models/listArtists';
import { useAppDispatch } from '../../store/hooks';
import { addArtist, removeArtist } from '../../store/library-slice';

const LibraryItem = ({ id, thumbnail, name }: ListArtists) => {
	const dispatch = useAppDispatch();
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	return (
		<li>
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
			<br />
			<button onClick={handleRemoveFromLibrary}>Remove</button>
		</li>
	);
};

export default LibraryItem;
