import { Image } from '@chakra-ui/react';

interface ImgArtistProps {
	src: string;
	alt: string;
}

const ImgArtist = ({ src, alt }: ImgArtistProps) => {
	return <Image src={src} alt={alt} marginBottom='5' maxH={600} objectFit='cover' />;
};

export default ImgArtist;

// 356 x 237
