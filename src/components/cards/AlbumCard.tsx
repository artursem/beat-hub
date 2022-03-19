import NextLink from 'next/link';
import { useAppSelector } from 'src/store/hooks';
import { selectAlbumsStatus } from '../displayResults/artist-slice';
import ImgAlbum from '../../elements/images/ImgAlbum';
import { Box, Center, Link } from '@chakra-ui/react';

interface AlbumCardProps {
	id?: string;
	artist?: string;
	artistId?: string;
	name: string;
	thumbnail: string;
}

const AlbumCard = ({ artist, artistId, name, thumbnail }: AlbumCardProps) => {
	const notification = useAppSelector(selectAlbumsStatus);

	const short = (str: string) => {
		if (str.length > 30) {
			return str.slice(0, 30) + '...';
		}
		return str;
	};
	return (
		<Box
			display='flex'
			flexDir={{ base: 'column', md: 'row', '2xl': 'column' }}
			justifyContent={{ base: 'center', md: 'flex-start', '2xl': 'center' }}
			width={{ base: '152px', md: '100%', '2xl': '152px' }}
			height={{ base: '300px', md: '152px', '2xl': '300px' }}
			alignItems='center'
			borderColor='gray.700'
			_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
			borderWidth={1}
			marginY={3}
			marginX={{ base: 1, md: 0, '2xl': 3 }}
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
						<Link>{`${short(name)} by ${artist}`}</Link>
					</NextLink>
				) : (
					<Box> {short(name)}</Box>
				)}
			</Center>
		</Box>
	);
};

export default AlbumCard;
