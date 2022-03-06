import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';

const Layout: FC = ({ children }) => {
	return (
		<div>
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
		</div>
	);
};

export default Layout;
