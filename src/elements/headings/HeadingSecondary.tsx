import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

const HeadingSecondary: FC = (props) => {
	return (
		<Heading as='h3' size='md' marginY='3'>
			{props.children}
		</Heading>
	);
};

export default HeadingSecondary;
