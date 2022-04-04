import { FC } from 'react';
import Navbar from './Navbar';
import Stack from 'src/components/layout/Stack';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
	return (
		<>
			<Stack
				direction='column'
				minHeight='100vh'
				width='full'
				spacing='0'
				bg='gray.900'
				color='gray.300'
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
