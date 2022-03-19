import { Image } from '@chakra-ui/react';

interface ImgAlbumProps {
	src: string;
	alt: string;
}

const ImgAlbum = ({ src, alt }: ImgAlbumProps) => {
	return <Image src={src} alt={alt} maxH={150} objectFit='cover' />;
};

export default ImgAlbum;

// 356 x 237
