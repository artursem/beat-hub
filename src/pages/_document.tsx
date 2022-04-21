import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from 'src/styles/theme';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap'
						rel='stylesheet'
					/>
					<link rel='icon' href='/fav.ico' />
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
