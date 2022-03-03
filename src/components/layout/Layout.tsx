import { FC } from 'react';
import SearchBox from '../musicSearch/SearchBox';

const Layout: FC = ({ children }) => {
	return (
		<div>
			<header>
				<SearchBox />
			</header>
			<main>{children}</main>
			{/* <footer>footer</footer> */}
		</div>
	);
};

export default Layout;
