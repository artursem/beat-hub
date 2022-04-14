import { ChangeEvent, FocusEvent, FC } from 'react';
import {
	InputGroup,
	Input as InputChakra,
	InputRightElement,
	StylesProvider,
	useMultiStyleConfig,
	useColorModeValue,
} from '@chakra-ui/react';
import { color } from 'src/styles/colors';
import SpinnerSmall from '../animations/SpinnerSmall';

interface InputProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus: (event: FocusEvent<HTMLInputElement>) => void;
	inputval: string;
	placeholder: string;
	loading: string;
}

const SearchInput: FC<InputProps> = (props) => {
	const styles = useMultiStyleConfig('InputWithIcon', {});

	const inputColor = useColorModeValue(...color.input);
	const inputBgColor = useColorModeValue(...color.inputBg);
	const inputPlaceholderColor = useColorModeValue(...color.placeholder);

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
