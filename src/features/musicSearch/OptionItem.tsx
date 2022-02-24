import Link from 'next/link';
import ListArtists from '../../models/listArtists';

const OptionList = ({ id, name }: ListArtists) => {
	return (
		<li>
			<Link href='/artist/${id}'>
				<a>{name}</a>
			</Link>
			<br />
			<i>{id}</i>
		</li>
	);
};

export default OptionList;
