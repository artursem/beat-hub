import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

const HeadingSecondary: FC = (props) => {
	return (
		<Heading as='h3' size='md' marginTop={10} marginBottom={3} textAlign='left' width='100%'>
			{props.children}
		</Heading>
	);
};

export default HeadingSecondary;
