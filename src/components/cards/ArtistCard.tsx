import { Box, Center, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { addArtist, removeArtist, selectLibraryList } from '../library/library-slice';
import BtnRemoveFromLib from 'src/elements/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/elements/buttons/BtnAddToLib';
import ImgThumbnail from '../../elements/images/ImgThumbnail';
import ListArtists from '../../models/listArtists';

const ArtistCard = ({ id, name, thumbnail }: ListArtists) => {
	const library = useAppSelector(selectLibraryList);
	const dispatch = useAppDispatch();
	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};

	const handleAddToLibrary = () => {
		dispatch(addArtist(id));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	const libraryButton = isInLibrary(id) ? (
		<BtnRemoveFromLib onClick={handleRemoveFromLibrary} />
	) : (
		<BtnAddToLib onClick={handleAddToLibrary} />
	);

	return (
		<Box
			display='flex'
			flexDir={{ base: 'row', lg: 'column' }}
			justifyContent={'flex-start'}
			width={{ base: '100%', lg: '154px' }}
			height={{ base: '102px', lg: '200px' }}
			alignItems='center'
			borderColor='gray.700'
			_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
			borderWidth={1}
			marginY={3}
			marginX={{ base: 0, lg: 3 }}
			flexWrap={'wrap'}
		>
			<Box width={150} height={100} bgGradient='linear(to-bl, gray.700, gray.800)'>
				<NextLink href={`/${id}`} passHref>
					<Link>{thumbnail && <ImgThumbnail src={thumbnail} alt={name} />}</Link>
				</NextLink>
			</Box>
			<Center flex={1}>
				<NextLink href={`/${id}`} passHref>
					<Link>{name}</Link>
				</NextLink>
			</Center>
			<Box marginRight={{ base: 2, lg: 0 }}>{libraryButton}</Box>
		</Box>
	);
};

export default ArtistCard;
