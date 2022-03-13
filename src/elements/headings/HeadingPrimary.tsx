import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

const HeadingPrimary: FC = (props) => {
	return (
		<Heading as='h2' size='2xl' marginY='4'>
			{props.children}
		</Heading>
	);
};

export default HeadingPrimary;