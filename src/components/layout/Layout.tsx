import { FC } from 'react';
import { VStack } from '@chakra-ui/react'; // import?
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
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
			<Navbar />
			<VStack width={{ base: '100%', '2xl': '100%' }} alignItems='center'>
				{children}
			</VStack>
			{/* <footer>footer</footer> */}
		</VStack>
	);
};

export default Layout;
