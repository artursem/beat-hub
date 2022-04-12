import { ChangeEvent, FocusEvent, FC } from 'react';
import {
	InputGroup,
	Input as InputChakra,
	InputRightElement,
	StylesProvider,
	useMultiStyleConfig,
	useColorModeValue,
} from '@chakra-ui/react';
import { DARK, LIGHT } from 'src/styles/colors';
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

	const inputColor = useColorModeValue(DARK.input, LIGHT.input);
	const inputBgColor = useColorModeValue(DARK.inputBg, LIGHT.inputBg);
	const inputPlaceholderColor = useColorModeValue(DARK.placeholder, LIGHT.placeholder);

	return (
		<InputGroup>
			<StylesProvider value={styles}>
				<InputChakra
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
