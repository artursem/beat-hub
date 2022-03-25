import Link from 'next/link';
import { Flex, Box, HStack, useBreakpointValue } from '@chakra-ui/react';
import SearchBox from './musicSearch/SearchBox';

import BtnLibrarySmall from 'src/components/buttons/BtnLibrarySmall';
import BtnLibrary from 'src/components/buttons/BtnLibrary';
import BtnHomeSmall from 'src/components/buttons/BtnHomeSmall';
import BtnHome from 'src/components/buttons/BtnHome';

const Navbar = () => {
	const variant = useBreakpointValue({ base: true, lg: false });

	return (
		<Flex direction='row' width='100%' justify='space-around' align='flex-start'>
			<Box flex={1} marginRight='2'>
				<SearchBox />
			</Box>
			<HStack>
				<Link href='/'>
					<a>{variant ? <BtnHomeSmall /> : <BtnHome />}</a>
				</Link>
				<Link href='/library'>
					<a>{variant ? <BtnLibrarySmall /> : <BtnLibrary />}</a>
				</Link>
			</HStack>
		</Flex>
	);
};

export default Navbar;
