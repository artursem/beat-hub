import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import Layout from '../components/layout/Layout';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
