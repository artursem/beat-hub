import { FC } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import Navbar from './Navbar';
import Stack from 'src/components/layout/Stack';
import Footer from './Footer';
import { color } from 'src/styles/colors';

const Layout: FC = ({ children }) => {
	const bgColor = useColorModeValue(...color.bg);
	const textColor = useColorModeValue(...color.text);
	return (
		<>
			<Navbar />
			<Stack
				direction='column'
				minHeight='calc(100vh - 50px)'
				width='full'
				spacing='0'
				bg={bgColor}
				color={textColor}
				padding={{ base: 2, lg: 5 }}
				alignItems='center'
			>
				{children}
			</Stack>
			<Footer />
		</>
	);
};

export default Layout;
