import { useBreakpointValue, Link } from '@chakra-ui/react'; // IMPORT!
import NextLink from 'next/link';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { addArtist, removeArtist, selectLibraryList } from 'src/store/library/library-slice';
import { ListArtists } from 'src/types/app-types';

import Box from 'src/components/layout/Box';
import Center from 'src/components/layout/Center';
import BtnRemoveFromLib from 'src/components/buttons/BtnRemoveFromLib';
import BtnAddToLib from 'src/components/buttons/BtnAddToLib';
import ImgThumbnail from 'src/components/images/ImgThumbnail';
import BtnRemoveFromLibSmall from 'src/components/buttons/BtnRemoveFromLibSmall';
import BtnAddToLibSmall from 'src/components/buttons/BtnAddToLibSmall';

const ArtistCard = ({ id, name, thumbnail }: ListArtists) => {
	const library = useAppSelector(selectLibraryList);
	const dispatch = useAppDispatch();
	const isInLibrary = (id: string) => {
		return library.indexOf(id) >= 0;
	};
	const variant = useBreakpointValue({ base: false, md: true, lg: false });

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
			flexDir={{ base: 'column', md: 'row', '2xl': 'column' }}
			justifyContent={{ base: 'center', md: 'flex-start', '2xl': 'center' }}
			width={{ base: '152px', md: '100%', '2xl': '152px' }}
			height={{ base: '200px', md: '102px', '2xl': '250px' }}
			alignItems='center'
			borderColor='gray.700'
			_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
			borderWidth={1}
			marginY={3}
			marginX={{ base: 1, md: 0, '2xl': 3 }}
			flexWrap={'wrap'}
			overflow={'hidden'}
		>
			<Box width={152} height={100} bgGradient='linear(to-bl, gray.700, gray.800)'>
				<NextLink href={`/artist/${id}`} passHref>
					<Link>{thumbnail && <ImgThumbnail src={thumbnail} alt={name} />}</Link>
				</NextLink>
			</Box>
			<Center
				as='p'
				flex={1}
				isTruncated
				style={{
					textAlign: 'center',
					whiteSpace: 'normal',
					wordWrap: 'break-word',
				}}
			>
				<NextLink href={`/artist/${id}`} passHref>
					<Link>{name}</Link>
				</NextLink>
			</Center>
			<Box mr={{ base: 0, md: 2, '2xl': 0 }} mb={{ base: 2, md: 0, '2xl': 2 }}>
				{libraryButton}
			</Box>
		</Box>
	);
};

export default ArtistCard;
