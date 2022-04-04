import Button from './Button';
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
	);
};

export default BtnAddToLibSmall;
