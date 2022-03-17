import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';
import { Flex, VStack, Box, HStack } from '@chakra-ui/react'; // import?
import { useBreakpointValue } from '@chakra-ui/react';
import BtnHome from 'src/elements/buttons/BtnHome';
import BtnLibrary from 'src/elements/buttons/BtnLibrary';
import BtnHomeSmall from 'src/elements/buttons/BtnHomeSmall';
import BtnLibrarySmall from 'src/elements/buttons/BtnLibrarySmall';

const Layout: FC = ({ children }) => {
	const variant = useBreakpointValue({ base: true, lg: false });

	return (
		<VStack
			minHeight='100vh'
			width='full'
			spacing='0'
			bg='gray.900'
			color='gray.300'
			padding='5'
			alignItems='center'
		>
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
			<VStack width={{ base: '100%', '2xl': '100%' }} alignItems='center'>
				{children}
			</VStack>
			{/* <footer>footer</footer> */}
		</VStack>
	);
};

export default Layout;
