import NextLink from 'next/link';
import { ListArtists } from 'src/types/app-types';
import ImgThumbnail from 'src/components/images/ImgThumbnail';
import Li from 'src/components/text/Li';
import Box from 'src/components/layout/Box';
import { useColorModeValue } from '@chakra-ui/react';
import { color } from 'src/styles/colors';
import { Link } from '@chakra-ui/react'; // IMPORT!

const OptionList = ({ id, name, thumbnail }: ListArtists) => {
	const borderColor = useColorModeValue(...color.border);
	const bgColor = useColorModeValue(...color.bg);
	const hoverBgColor = useColorModeValue(...color.hoverBg);
	const hoverTextColor = useColorModeValue(...color.hoverText);
	const gradient = useColorModeValue(...color.gradient);

	return (
		<Li>
			<NextLink href={`/artist/${id}`} passHref>
				<Link>
					<Box
						display='flex'
						flexDir='row'
						justifyContent='flex-start'
						alignItems='center'
						borderColor={borderColor}
						bgColor={bgColor}
						_hover={{ bgColor: hoverBgColor, color: hoverTextColor }}
						borderWidth={1}
					>
						<Box width={152} height={100} bgGradient={gradient}>
							{thumbnail && <ImgThumbnail src={thumbnail} alt={name} />}
						</Box>
						<Box ml={2} flex={1}>
							{name}
						</Box>
					</Box>
				</Link>
			</NextLink>
		</Li>
	);
};

export default OptionList;

{
	/* <Li>
<Box
	display='flex'
	flexDir='row'
	justifyContent='flex-start'
	alignItems='center'
	borderColor='gray.700'
	bgColor='gray.900'
	_hover={{ bgColor: 'gray.700', color: 'gray.50' }}
	borderWidth={1}
>
	<Box width={152} height={100} bgGradient='linear(to-bl, gray.700, gray.800)'>
		<NextLink href={`/${id}`} passHref>
			<Link>{thumbnail && <ImgThumbnail src={thumbnail} alt={name} />}</Link>
		</NextLink>
	</Box>
	<NextLink href={`/${id}`} passHref>
		<Link flex={1} height='100%' overflow={'hidden'} ml={2} border='1px solid pink'>
			{name}
		</Link>
	</NextLink>
</Box>
</Li> */
}
