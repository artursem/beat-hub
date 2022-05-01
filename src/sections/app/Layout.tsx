import { FC } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Stack from 'src/components/layout/Stack';
import { color } from 'src/styles/colors';

const Layout: FC = ({ children }) => {
	const bgColor = useColorModeValue(...color.bg);
	const textColor = useColorModeValue(...color.text);

	return (
		<>
			<Navbar />
			<Stack
				direction='column'
				minHeight='calc(100vh - 130px)'
				width='full'
				spacing='0'
				bg={bgColor}
				color={textColor}
				padding={{ base: '70px 2px 2px 2px', lg: '10px' }}
				alignItems='center'
			>
				{children}
			</Stack>
			<Footer />
		</>
	);
};

export default Layout;
