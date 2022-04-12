import { FC } from 'react';
import IconButton from './IconButton';
import IconLight from '../icons/IconLight';
import IconDark from '../icons/IconDark';

interface BtnThemeSmallProps {
	colorMode: 'light' | 'dark';
}

const BtnThemeSmall: FC<BtnThemeSmallProps> = ({ colorMode }) => {
	return (
		<IconButton
			aria-label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
			icon={colorMode === 'light' ? <IconDark /> : <IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
		/>
	);
};

export default BtnThemeSmall;
