import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

const HeadingSecondary: FC = (props) => {
	return (
		<Heading
			as='h3'
			size='md'
			pt={5}
			pb={2}
			textAlign={{ base: 'left', lg: 'center' }}
			width='100%'
		>
			{props.children}
		</Heading>
	);
};

export default HeadingSecondary;
