import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';
import { Flex, VStack, Button, HStack } from '@chakra-ui/react';

const Layout: FC = ({ children }) => {
	return (
		<VStack min-height='100vh' width='full' spacing='0' bg='gray.900' color='gray.50'>
			<Flex direction='row' width='100%' justify='space-around' align='center'>
				<SearchBox />
				<HStack>
					<Link href='/'>
						<Button colorScheme='teal' size='md'>
							Home
						</Button>
					</Link>
					<Link href='/library'>
						<Button colorScheme='teal' size='md'>
							Library
						</Button>
					</Link>
				</HStack>
			</Flex>
			<main>{children}</main>
			{/* <footer>footer</footer> */}
		</VStack>
	);
};

export default Layout;
