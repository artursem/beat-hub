import Image from 'next/image';

interface ImgAlbumProps {
	src: string;
	alt: string;
}

const ImgAlbum = ({ src, alt }: ImgAlbumProps) => {
	return <Image src={src} alt={alt} width={150} height={150} />;
};

export default ImgAlbum;
