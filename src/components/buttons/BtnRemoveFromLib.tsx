import Button from './Button';
import IconCheck from '../icons/IconCheck';

interface BtnRemoveFromLibProps {
	onClick: () => void;
	small?: boolean;
}

const BtnRemoveFromLib = (props: BtnRemoveFromLibProps) => {
	return (
		<Button
			onClick={props.onClick}
			leftIcon={<IconCheck />}
			colorScheme='teal'
			size={props.small ? 'xs' : 'sm'}
			variant='outline'
		>
			In your Library
		</Button>
	);
};

export default BtnRemoveFromLib;
