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
			flexDir={{ base: 'row', lg: 'column' }}
			justifyContent={'flex-start'}
			width={{ base: '100%', lg: '150px' }}
			height={{ base: '152px', lg: '300px' }}
			alignItems='center'
			borderColor='gray.700'
			_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
			borderWidth={1}
			marginY={3}
			marginX={{ base: 0, lg: 3 }}
			flexWrap={'wrap'}
		>
			<Box margin={0} flex={1}>
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
			<Center as='div' flex={2} padding={2} marginY={3}>
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
