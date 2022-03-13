import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';
import { Flex, VStack, Box, HStack } from '@chakra-ui/react';
import BtnHome from 'src/elements/buttons/BtnHome';
import BtnLibrary from 'src/elements/buttons/BtnLibrary';

const Layout: FC = ({ children }) => {
	return (
		<VStack
			minHeight='100vh'
			width='full'
			spacing='0'
			bg='gray.900'
			color='gray.300'
			padding='5'
			alignItems='stretch'
		>
			<Flex direction='row' width='100%' justify='space-around' align='flex-start'>
				<Box flex={1} marginRight='2'>
					<SearchBox />
				</Box>
				<HStack>
					<Link href='/'>
						<a>
							<BtnHome />
						</a>
					</Link>
					<Link href='/library'>
						<a>
							<BtnLibrary />
						</a>
					</Link>
				</HStack>
			</Flex>
			<VStack>{children}</VStack>
			{/* <footer>footer</footer> */}
		</VStack>
	);
};

export default Layout;
