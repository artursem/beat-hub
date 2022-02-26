import Link from 'next/link';
import ListArtists from '../../models/listArtists';

const OptionList = ({ id, name }: ListArtists) => {
	return (
		<li>
			{/* dynamic routing!!!! */}
			<Link href={`/${id}`}>
				<a>{name}</a>
			</Link>
			<br />
			<i>{id}</i>
		</li>
	);
};

export default OptionList;
