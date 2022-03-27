import Image from 'next/image';
// import { Image } from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';

interface ImgArtistProps {
	src: string;
	alt: string;
}

const ImgArtist = ({ src, alt }: ImgArtistProps) => {
	return (
		<AspectRatio
			w={{ base: '100%', md: '500px', '2xl': '100%' }}
			ratio={3 / 2}
			pos='relative'
			mb={5}
		>
			<Image src={src} alt={alt} layout='fill' priority />
		</AspectRatio>
	);
};

export default ImgArtist;

// 356 x 237
