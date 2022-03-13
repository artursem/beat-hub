import { Box, Center } from '@chakra-ui/react';
import ImgAlbum from '../../elements/images/ImgAlbum';

interface AlbumCardProps {
	name: string;
	thumbnail: string;
}

const AlbumCard = ({ name, thumbnail }: AlbumCardProps) => {
	return (
		<Box
			display='flex'
			flexDir={['column', 'row']}
			alignItems='center'
			borderColor='gray.700'
			borderWidth={1}
			marginY={3}
		>
			<Box margin={0}>
				<ImgAlbum src={thumbnail} alt={name} />
			</Box>
			<Center flex={1}>{name}</Center>
		</Box>
	);
};

export default AlbumCard;
