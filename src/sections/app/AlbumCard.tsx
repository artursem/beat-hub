import NextLink from 'next/link';
import { useColorModeValue } from '@chakra-ui/react';
import ImgAlbum from 'src/components/images/ImgAlbum';
import Box from 'src/components/layout/Box';
import Center from 'src/components/layout/Center';

import { Link } from '@chakra-ui/react'; // IMPORT!

interface AlbumCardProps {
	id?: string;
	artist?: string;
	artistId?: string;
	name: string;
	thumbnail: string;
}

const AlbumCard = ({ artist, artistId, name, thumbnail }: AlbumCardProps) => {
	const borderColor = useColorModeValue('gray.700', 'gray.300');
	const hoverBgColor = useColorModeValue('gray.700', 'gray.200');
	const hoverTextColor = useColorModeValue('gray.200', 'gray.800');

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
			alignItems='center'
			width={{ base: 152, md: '100%', '2xl': 152 }}
			height={{ base: 300, md: '152px', '2xl': 300 }}
			borderColor={borderColor}
			_hover={{ bgColor: hoverBgColor, color: hoverTextColor }}
			borderWidth={1}
			marginY={3}
			marginX={{ base: 1, md: 0, '2xl': 3 }}
		>
			<Box h={152} flex={1}>
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
			<Center
				as='div'
				flex={2}
				padding={2}
				marginY={3}
				style={{
					textAlign: 'center',
					whiteSpace: 'normal',
					wordWrap: 'break-word',
				}}
			>
				{artistId ? (
					<NextLink href={`/artist/${artistId}`} passHref>
						<Link>{`${short(name)} by ${artist}`}</Link>
					</NextLink>
				) : (
					<Box> {short(name)}</Box>
				)}
			</Center>
			<Box
				w={{ base: 0, md: 140, '2xl': 0 }}
				h={0}
				backgroundColor='gray.200'
				flex={{ base: 0, md: 1, '2xl': 0 }}
			></Box>
		</Box>
	);
};

export default AlbumCard;
