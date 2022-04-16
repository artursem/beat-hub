import Image from 'next/image';
import blankImage from 'public/blank_image.png';

interface ImgThumbnailProps {
	alt: string;
}

const ImgThumbnailBlank = ({ alt }: ImgThumbnailProps) => {
	return <Image src={blankImage} alt={alt} width={150} height={100} />;
};

export default ImgThumbnailBlank;
