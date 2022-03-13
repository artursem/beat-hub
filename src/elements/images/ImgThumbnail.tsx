import { Image } from '@chakra-ui/react';

interface ImgThumbnailProps {
	src: string;
	alt: string;
}

const ImgThumbnail = ({ src, alt }: ImgThumbnailProps) => {
	return <Image src={src} alt={alt} maxH={100} objectFit='cover' />;
};

export default ImgThumbnail;

// 356 x 237
