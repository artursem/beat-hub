import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/store/hooks';

import { ListArtists } from 'src/types/app-types';

import ImgThumbnail from 'src/components/images/ImgThumbnail';
import Li from 'src/components/text/Li';
import { Box, Link } from '@chakra-ui/react';

const OptionList = ({ id, name, thumbnail }: ListArtists) => {
	return (
		<Li>
			<NextLink href={`/artist/${id}`} passHref>
				<Link>
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
