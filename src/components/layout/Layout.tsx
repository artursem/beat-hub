import Link from 'next/link';
import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';

import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { libraryActions } from '../../store/library-slice';

const Layout: FC = ({ children }) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(libraryActions.setLibrary());
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
