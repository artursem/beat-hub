import { useBreakpointValue, Box, Center, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { addArtist, removeArtist, selectLibraryList } from '../library/library-slice';
import BtnRemoveFromLib from 'src/elements/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/elements/buttons/BtnAddToLib';
import ImgThumbnail from '../../elements/images/ImgThumbnail';
import ListArtists from '../../models/listArtists';
import BtnRemoveFromLibSmall from 'src/elements/buttons/BtnRemoveFromLibSmall';
import BtnAddToLibSmall from 'src/elements/buttons/BtnAddToLibSmall';

const ArtistCard = ({ id, name, thumbnail }: ListArtists) => {
	const library = useAppSelector(selectLibraryList);
	const dispatch = useAppDispatch();
	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};
	const variant = useBreakpointValue({ base: true, lg: false });

	const handleAddToLibrary = () => {
		dispatch(addArtist(id));
	};
	const handleRemoveFromLibrary = () => {
		dispatch(removeArtist(id));
	};

	const libraryButton = isInLibrary(id) ? (
		variant ? (
			<BtnRemoveFromLib onClick={handleRemoveFromLibrary} />
		) : (
			<BtnRemoveFromLibSmall onClick={handleRemoveFromLibrary} />
		)
	) : variant ? (
		<BtnAddToLib onClick={handleAddToLibrary} />
	) : (
		<BtnAddToLibSmall onClick={handleAddToLibrary} />
	);

	return (
		<Box
			display='flex'
			flexDir={{ base: 'row', lg: 'column' }}
			justifyContent={{ base: 'flex-start', lg: 'center' }}
			width={{ base: '100%', lg: '152px' }}
			height={{ base: '102px', lg: '300px' }}
			alignItems='center'
			borderColor='gray.700'
			_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
			borderWidth={1}
			marginY={3}
			marginX={{ base: 0, lg: 3 }}
			flexWrap={'wrap'}
			overflow={'hidden'}
		>
			<Box width={152} height={100} bgGradient='linear(to-bl, gray.700, gray.800)'>
				<NextLink href={`/${id}`} passHref>
					<Link>{thumbnail && <ImgThumbnail src={thumbnail} alt={name} />}</Link>
				</NextLink>
			</Box>
			<Center as='p' flex={1} isTruncated>
				<NextLink href={`/${id}`} passHref>
					<Link>{name}</Link>
				</NextLink>
			</Center>
			<Box mr={{ base: 2, lg: 0 }} mb={{ base: 0, lg: 2 }}>
				{libraryButton}
			</Box>
		</Box>
	);
};

export default ArtistCard;
