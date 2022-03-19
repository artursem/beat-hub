import { Button } from '@chakra-ui/react';
import IconCheck from '../icons/IconCheck';

interface BtnRemoveFromLibSmallProps {
	onClick: () => void;
}

const BtnRemoveFromLibSmall = (props: BtnRemoveFromLibSmallProps) => {
	return (
		<Button
			onClick={props.onClick}
			leftIcon={<IconCheck />}
			colorScheme='teal'
			size='xs'
			variant='outline'
		>
			In your Library
		</Button>
	);
};

export default BtnRemoveFromLibSmall;
