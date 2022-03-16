import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

const HeadingPrimary: FC = (props) => {
	return (
		<Heading
			as='h2'
			size='2xl'
			pt={8}
			pb={3}
			textAlign={{ base: 'left', lg: 'center' }}
			width='100%'
		>
			{props.children}
		</Heading>
	);
};

export default HeadingPrimary;
