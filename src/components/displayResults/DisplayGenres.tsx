import List from '../../elements/text/List';
import Genre from '../../elements/text/Genre';
import LiInline from 'src/elements/text/LiInline';

interface DisplayGenresProps {
	genres: string[];
}

const DisplayGenres = ({ genres }: DisplayGenresProps) => {
	return (
		<List>
			{genres &&
				genres.map((gen) => (
					<LiInline key={gen}>
						<Genre gen={gen} />
					</LiInline>
				))}
		</List>
	);
};

export default DisplayGenres;
