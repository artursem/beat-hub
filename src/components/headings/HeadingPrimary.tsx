import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

const HeadingPrimary: FC = (props) => {
	return (
		<Heading
			as='h2'
			fontWeight={'black'}
			size='2xl'
			pt={8}
			pb={3}
			textAlign={'center'}
			width='100%'
		>
			{props.children}
		</Heading>
	);
};

export default HeadingPrimary;
