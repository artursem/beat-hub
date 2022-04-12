import { ChangeEvent, FocusEvent, FC } from 'react';
import {
	InputGroup,
	Input as InputChakra,
	InputRightElement,
	StylesProvider,
	useMultiStyleConfig,
	useColorModeValue,
} from '@chakra-ui/react';

import SpinnerSmall from '../animations/SpinnerSmall';

interface InputProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus: (event: FocusEvent<HTMLInputElement>) => void;
	inputval: string;
	placeholder: string;
	loading: string; // WTF?
}

const SearchInput: FC<InputProps> = (props) => {
	const styles = useMultiStyleConfig('InputWithIcon', {});
	const inputColor = useColorModeValue('gray.100', 'gray.900');
	const inputBgColor = useColorModeValue('gray.800', 'gray.50');
	const inputPlaceholderColor = useColorModeValue('gray.100', 'gray.900');

	return (
		<InputGroup>
			<StylesProvider value={styles}>
				<InputChakra
					// color='gray.100'
					color={inputColor}
					backgroundColor={inputBgColor}
					_placeholder={{ color: inputPlaceholderColor }}
					borderColor={inputColor}
					colorScheme='teal'
					variant='flushed'
					type='text'
					value={props.inputval}
					{...props}
					onChange={props.onChange}
					onFocus={props.onFocus}
				/>
				{props.loading === 'true' && (
					<InputRightElement height='100%'>
						<SpinnerSmall />
					</InputRightElement>
				)}
			</StylesProvider>
		</InputGroup>
	);
};

export default SearchInput;
