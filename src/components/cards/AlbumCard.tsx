import NextLink from 'next/link';
import { Box, Center, Link } from '@chakra-ui/react';
import ImgAlbum from '../../elements/images/ImgAlbum';

interface AlbumCardProps {
	id?: string;
	artist?: string;
	artistId?: string;
	name: string;
	thumbnail: string;
}

const AlbumCard = ({ artist, artistId, name, thumbnail }: AlbumCardProps) => {
	return (
		<Box
			display='flex'
			flexDir={['column', 'row']}
			_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
			alignItems='center'
			borderColor='gray.700'
			borderWidth={1}
			marginY={3}
		>
			<Box margin={0}>
				{artistId ? (
					<NextLink href={`/${artistId}`} passHref>
						<Link>
							<ImgAlbum src={thumbnail} alt={name} />
						</Link>
					</NextLink>
				) : (
					<ImgAlbum src={thumbnail} alt={name} />
				)}
			</Box>
			<Center flex={1} padding={2}>
				{artistId ? (
					<NextLink href={`/${artistId}`} passHref>
						<Link>{`${name} by ${artist}`}</Link>
					</NextLink>
				) : (
					<Box> {name}</Box>
				)}
			</Center>
		</Box>
	);
};

export default AlbumCard;
