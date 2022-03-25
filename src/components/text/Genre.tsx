import { Tag } from '@chakra-ui/react';

interface GenreProps {
	gen: string;
}

const Genre = ({ gen }: GenreProps) => {
	return (
		<Tag variant='solid' marginRight={2} marginBottom={2}>
			{gen}
		</Tag>
	);
};

export default Genre;
