import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';

import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setLibrary } from '../../store/library-slice';

const Layout: FC = ({ children }) => {
	// move somewhere!!!!!!
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setLibrary());
	}, [dispatch]);

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
