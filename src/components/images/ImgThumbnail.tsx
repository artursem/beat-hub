import Image from 'next/image';

interface ImgThumbnailProps {
	src: string;
	alt: string;
}

const ImgThumbnail = ({ src, alt }: ImgThumbnailProps) => {
	return <Image src={src} alt={alt} width={150} height={100} />;
};

export default ImgThumbnail;
