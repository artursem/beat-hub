import { Box, Center } from '@chakra-ui/react';
import ImgThumbnail from '../images/ImgThumbnail';
import ListArtists from '../../models/listArtists';
import Link from 'next/link';

const ArtistCard = ({ id, name, thumbnail }: ListArtists) => {
	return (
		<Link href={`/${id}`}>
			<a>
				<Box
					display='flex'
					flexDir={['column', 'row']}
					alignItems='center'
					borderColor='gray.700'
					borderWidth={1}
					marginY={3}
				>
					<Box margin={0} width={150} height={100} bgGradient='linear(to-bl, gray.700, gray.800)'>
						{thumbnail && <ImgThumbnail src={thumbnail} alt={name} />}
					</Box>
					<Center flex={1}>{name}</Center>
				</Box>
			</a>
		</Link>
	);
};

export default ArtistCard;
