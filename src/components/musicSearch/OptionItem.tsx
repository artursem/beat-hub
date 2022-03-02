import Link from 'next/link';
import ListArtists from '../../models/listArtists';

const OptionList = ({ id, name, thumbnail }: ListArtists) => {
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
		</li>
	);
};

export default OptionList;
