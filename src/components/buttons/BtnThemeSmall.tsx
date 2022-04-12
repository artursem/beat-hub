import { FC } from 'react';
import IconButton from './IconButton';
import IconLight from '../icons/IconLight';
import IconDark from '../icons/IconDark';

interface BtnThemeSmallProps {
	colorMode: 'light' | 'dark';
	onClick: () => void;
}

const BtnThemeSmall: FC<BtnThemeSmallProps> = ({ colorMode, onClick }) => {
	return (
		<IconButton
			onClick={onClick}
			aria-label={colorMode !== 'light' ? 'Dark Mode' : 'Light Mode'}
			icon={colorMode !== 'light' ? <IconDark /> : <IconLight />}
			colorScheme='teal'
			size='md'
			variant='solid'
		/>
	);
};

export default BtnThemeSmall;
