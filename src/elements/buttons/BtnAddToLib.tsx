import { Button } from '@chakra-ui/react';
import IconAdd from '../icons/IconAdd';

interface BtnAddToLibProps {
	onClick: () => void;
}

const BtnAddToLib = (props: BtnAddToLibProps) => {
	return (
		<Button
			onClick={props.onClick}
			leftIcon={<IconAdd />}
			colorScheme='teal'
			size='sm'
			variant='solid'
		>
			Add to Library
		</Button>
	);
};

export default BtnAddToLib;
