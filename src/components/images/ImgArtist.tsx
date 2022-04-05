import Image from 'next/image';
import AspectRatio from 'src/components/images/AspectRatio';

interface ImgArtistProps {
	src: string;
	alt: string;
}

const ImgArtist = ({ src, alt }: ImgArtistProps) => {
	return (
		<AspectRatio
			// w={{ base: '100%', md: '500px', '2xl': '100%' }}
			w='min(100%, 800px)'
			ratio={3 / 2}
			pos='relative'
			mb={5}
		>
			<Image src={src} alt={alt} layout='fill' priority />
		</AspectRatio>
	);
};

export default ImgArtist;
