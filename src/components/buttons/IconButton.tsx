import { FC } from 'react';
import { IconButton as IconButtonChakra, IconButtonProps } from '@chakra-ui/react';

const IconButton: FC<IconButtonProps> = (props) => {
	return <IconButtonChakra {...props} />;
};

export default IconButton;
