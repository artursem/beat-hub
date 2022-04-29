import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useBreakpointValue, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { color } from 'src/styles/colors';
import SearchBox from './musicSearch/SearchBox';
import Stack from 'src/components/layout/Stack';
import Box from 'src/components/layout/Box';
import BtnLibrarySmall from 'src/components/buttons/BtnLibrarySmall';
import BtnLibrary from 'src/components/buttons/BtnLibrary';
import BtnHomeSmall from 'src/components/buttons/BtnHomeSmall';
import BtnHome from 'src/components/buttons/BtnHome';
import BtnTheme from 'src/components/buttons/BtnTheme';
import BtnThemeSmall from 'src/components/buttons/BtnThemeSmall';
import IconHeadphones from 'src/components/icons/IconHeadphones';

const Navbar = () => {
	const [prevPosition, setPrevPosition] = useState(0);
	const [showNavbar, setShowNavbar] = useState(true);

	const handleScroll = useCallback(() => {
		const currentScrollPos = window.pageYOffset;
		setShowNavbar(prevPosition > currentScrollPos || currentScrollPos < 80);
		setPrevPosition(currentScrollPos);
	}, [prevPosition]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevPosition, showNavbar, handleScroll]);

	const mobile = useBreakpointValue({ base: true, lg: false });
	const { colorMode, toggleColorMode } = useColorMode();
	const navBg = useColorModeValue(...color.navBg);
	const logoColor = useColorModeValue('#171923', '#E2E8F0');
	const logoBg = useColorModeValue(...color.hoverBg);

	return (
		<Stack
			height='80px'
			position={mobile ? 'fixed' : 'static'}
			top={showNavbar ? 0 : '-80px'}
			transition='top 0.3s'
			zIndex={2}
			direction='row'
			width='100%'
			justify='space-around'
			align='center'
			p={{ base: 2, lg: 5 }}
			bgColor={navBg}
			boxShadow='lg'
		>
			<Box
				width='40px'
				height='40px'
				display='flex'
				justifyContent='center'
				alignItems='center'
				borderRadius='50%'
				backgroundColor={logoBg}
				mr={{ base: 1, lg: 3 }}
				pb={1}
			>
				<IconHeadphones color={logoColor} />
			</Box>
			<Box flex={1} marginRight='2'>
				<SearchBox />
			</Box>
			<Stack direction='row'>
				<Link href='/'>
					<a tabIndex={2}>{mobile ? <BtnHomeSmall /> : <BtnHome />}</a>
				</Link>
				<Link href='/library'>
					<a tabIndex={3}>{mobile ? <BtnLibrarySmall /> : <BtnLibrary />}</a>
				</Link>
				{mobile ? (
					<BtnThemeSmall colorMode={colorMode} onClick={toggleColorMode} tabIndex={4} />
				) : (
					<BtnTheme colorMode={colorMode} onClick={toggleColorMode} tabIndex={4} />
				)}
			</Stack>
		</Stack>
	);
};

export default Navbar;
