import { FC } from 'react';
import Button from './Button';
import IconLight from '../icons/IconLight';
import IconDark from '../icons/IconDark';

interface BtnThemeProps {
	colorMode: 'light' | 'dark';
	onClick: () => void;
	tabIndex?: number;
}

const BtnTheme: FC<BtnThemeProps> = ({ colorMode, onClick, tabIndex }) => {
	return (
		<Button
			onClick={onClick}
			leftIcon={colorMode === 'light' ? <IconDark /> : <IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
			tabIndex={tabIndex}
		>
			{colorMode === 'light' ? 'Dark' : 'Light'}
		</Button>
	);
};

export default BtnTheme;
