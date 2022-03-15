import { IconButton } from '@chakra-ui/react';
import IconCheck from '../icons/IconCheck';

interface BtnRemoveFromLibSmallProps {
	onClick: () => void;
}

const BtnRemoveFromLibSmall = (props: BtnRemoveFromLibSmallProps) => {
	return (
		<IconButton
			aria-label='Add to Library'
			onClick={props.onClick}
			icon={<IconCheck />}
			colorScheme='teal'
			size='sm'
			variant='outline'
		/>
	);
};

export default BtnRemoveFromLibSmall;
