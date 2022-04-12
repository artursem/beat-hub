import { FC } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import Navbar from './Navbar';
import Stack from 'src/components/layout/Stack';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
	const bgColor = useColorModeValue('gray.800', 'gray.50');
	const textColor = useColorModeValue('gray.300', 'gray.800');

	return (
		<>
			<Stack
				direction='column'
				minHeight='calc(100vh - 50px)'
				width='full'
				spacing='0'
				bg={bgColor}
				color={textColor}
				padding='5'
				alignItems='center'
			>
				<Navbar />
				<Stack dir='column' width={{ base: '100%', '2xl': '100%' }} alignItems='center'>
					{children}
				</Stack>
			</Stack>
			<Footer />
		</>
	);
};

export default Layout;
