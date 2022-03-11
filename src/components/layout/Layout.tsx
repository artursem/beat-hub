import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';
import { VStack } from '@chakra-ui/react';

const Layout: FC = ({ children }) => {
	return (
		<VStack height='100vh' width='full' spacing='0'>
			<header
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}
			>
				<SearchBox />
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/library'>
					<a>Library</a>
				</Link>
			</header>
			<main>{children}</main>
			{/* <footer>footer</footer> */}
		</VStack>
	);
};

export default Layout;
