import { NextPage } from 'next';
import Head from 'next/head';
import DisplayLibrary from '../../sections/library/DisplayLibrary';

const Library: NextPage = () => {
	return (
		<>
			<Head>
				<title>Library - beathub</title>
			</Head>
			<DisplayLibrary />
		</>
	);
};

export default Library;
