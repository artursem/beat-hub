import Button from './Button';
import IconAdd from '../icons/IconAdd';

interface BtnAddToLibProps {
	onClick: () => void;
	small?: boolean;
}

const BtnAddToLib = (props: BtnAddToLibProps) => {
	return (
		<Button
			onClick={props.onClick}
			leftIcon={<IconAdd />}
			colorScheme='teal'
			size={props.small ? 'xs' : 'sm'}
			variant='solid'
		>
			Add to Library
		</Button>
	);
};

export default BtnAddToLib;
