import { IconButton } from '@chakra-ui/react';
import IconAdd from '../icons/IconAdd';

interface BtnAddToLibSmallProps {
	onClick: () => void;
}

const BtnAddToLibSmall = (props: BtnAddToLibSmallProps) => {
	return (
		<IconButton
			aria-label='Add to Library'
			onClick={props.onClick}
			icon={<IconAdd />}
			colorScheme='teal'
			size='sm'
			variant='solid'
		/>
	);
};

export default BtnAddToLibSmall;
