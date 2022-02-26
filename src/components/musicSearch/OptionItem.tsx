import Link from 'next/link';
import ListArtists from '../../models/listArtists';

const OptionList = ({ id, name }: ListArtists) => {
	return (
		<li>
			<Link href={`/${id}`}>
				<a>{name}</a>
			</Link>
		</li>
	);
};

export default OptionList;
