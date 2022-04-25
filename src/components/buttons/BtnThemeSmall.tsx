import { FC } from 'react';
import IconButton from './IconButton';
import IconLight from '../icons/IconLight';
import IconDark from '../icons/IconDark';

interface BtnThemeSmallProps {
	colorMode: 'light' | 'dark';
	onClick: () => void;
	tabIndex?: number;
}

const BtnThemeSmall: FC<BtnThemeSmallProps> = ({ colorMode, onClick, tabIndex }) => {
	return (
		<IconButton
			onClick={onClick}
			aria-label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
			icon={colorMode === 'light' ? <IconDark /> : <IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
			tabIndex={tabIndex}
		/>
	);
};

export default BtnThemeSmall;
