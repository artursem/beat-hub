import { Button } from '@chakra-ui/react';
import IconCheck from '../icons/IconCheck';

interface BtnRemoveFromLibProps {
	onClick: () => void;
}

const BtnRemoveFromLib = (props: BtnRemoveFromLibProps) => {
	return (
		<Button
			onClick={props.onClick}
			leftIcon={<IconCheck />}
			colorScheme='teal'
			size='sm'
			variant='outline'
		>
			In your Library
		</Button>
	);
};

export default BtnRemoveFromLib;
