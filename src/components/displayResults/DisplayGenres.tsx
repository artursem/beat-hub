import ListInline from '../../elements/text/ListInline';
import Genre from '../../elements/text/Genre';
import LiInline from 'src/elements/text/LiInline';

interface DisplayGenresProps {
	genres: string[];
}

const DisplayGenres = ({ genres }: DisplayGenresProps) => {
	return (
		<ListInline>
			{genres &&
				genres.map((gen) => (
					<LiInline key={gen}>
						<Genre gen={gen} />
					</LiInline>
				))}
		</ListInline>
	);
};

export default DisplayGenres;
