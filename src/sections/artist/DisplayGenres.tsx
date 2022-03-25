import ListInline from 'src/components/text/ListInline';
import Genre from 'src/components/text/Genre';
import LiInline from 'src/components/text/LiInline';

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
