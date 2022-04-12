import Link from 'next/link';
import { useBreakpointValue, useColorMode } from '@chakra-ui/react';
import SearchBox from './musicSearch/SearchBox';

import Stack from 'src/components/layout/Stack';
import Box from 'src/components/layout/Box';
import BtnLibrarySmall from 'src/components/buttons/BtnLibrarySmall';
import BtnLibrary from 'src/components/buttons/BtnLibrary';
import BtnHomeSmall from 'src/components/buttons/BtnHomeSmall';
import BtnHome from 'src/components/buttons/BtnHome';
import BtnTheme from 'src/components/buttons/BtnTheme';
import BtnThemeSmall from 'src/components/buttons/BtnThemeSmall';

const Navbar = () => {
	const variant = useBreakpointValue({ base: true, lg: false });
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Stack direction='row' width='100%' justify='space-around' align='flex-start'>
			<Box flex={1} marginRight='2'>
				<SearchBox />
			</Box>
			<Stack direction='row'>
				<Link href='/'>
					<a>{variant ? <BtnHomeSmall /> : <BtnHome />}</a>
				</Link>
				<Link href='/library'>
					<a>{variant ? <BtnLibrarySmall /> : <BtnLibrary />}</a>
				</Link>
				{variant ? (
					<BtnThemeSmall colorMode={colorMode} onClick={toggleColorMode} />
				) : (
					<BtnTheme colorMode={colorMode} onClick={toggleColorMode} />
				)}
			</Stack>
		</Stack>
	);
};

export default Navbar;
