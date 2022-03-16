import { IconButton } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import IconAdd from '../icons/IconAdd';

interface BtnAddToLibSmallProps {
	onClick: () => void;
}

const BtnAddToLibSmall = (props: BtnAddToLibSmallProps) => {
	return (
		<Button
			onClick={props.onClick}
			leftIcon={<IconAdd />}
			colorScheme='teal'
			size='xs'
			variant='solid'
		>
			Add to Library
		</Button>
		// <IconButton
		// 	aria-label='Add to Library'
		// 	onClick={props.onClick}
		// 	icon={<IconAdd />}
		// 	colorScheme='teal'
		// 	size='sm'
		// 	variant='solid'
		// />
	);
};

export default BtnAddToLibSmall;
