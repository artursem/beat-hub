import { NextPage } from 'next';
import Head from 'next/head';
import DisplayLibrary from '../../components/displayResults/DisplayLibrary';

const Library: NextPage = () => {
	return (
		<>
			<Head>
				<title>collection - beathub</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Your library</h1>
			<DisplayLibrary />
		</>
	);
};

export default Library;
