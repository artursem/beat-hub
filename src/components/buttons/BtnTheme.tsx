import { FC } from 'react';
import Button from './Button';
import IconLight from '../icons/IconLight';
import IconDark from '../icons/IconDark';

interface BtnThemeProps {
	colorMode: 'light' | 'dark';
}

const BtnTheme: FC<BtnThemeProps> = ({ colorMode }) => {
	return (
		<Button
			leftIcon={colorMode === 'light' ? <IconDark /> : <IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
		>
			{colorMode === 'light' ? 'Dark' : 'Light'}
		</Button>
	);
};

export default BtnTheme;
