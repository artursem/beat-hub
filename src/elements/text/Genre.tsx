import { Tag } from '@chakra-ui/react';

interface GenreProps {
	gen: string;
}

const Genre = ({ gen }: GenreProps) => {
	return <Tag variant='solid'>{gen}</Tag>;
};

export default Genre;
