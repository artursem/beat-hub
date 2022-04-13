import Image from 'next/image';
// import brokenRecord from '../../public/404.png';
import brokenRecord from '../../public/404_2.png';
import HeadingPrimary from 'src/components/headings/HeadingPrimary';
import Center from 'src/components/layout/Center';
export default function Custom404() {
	return (
		<>
			<HeadingPrimary>Page Not Found</HeadingPrimary>
			<Center paddingTop='25px'>
				<Image src={brokenRecord} alt='Page not found' />
			</Center>
		</>
	);
}
