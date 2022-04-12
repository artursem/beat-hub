import { FC } from 'react';
import Button from './Button';
import IconLight from '../icons/IconLight';
import IconDark from '../icons/IconDark';

interface BtnThemeProps {
	colorMode: 'light' | 'dark';
	onClick: () => void;
}

const BtnTheme: FC<BtnThemeProps> = ({ colorMode, onClick }) => {
	return (
		<Button
			onClick={onClick}
			leftIcon={colorMode !== 'light' ? <IconDark /> : <IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
		>
			{colorMode !== 'light' ? 'Dark' : 'Light'}
		</Button>
	);
};

export default BtnTheme;
