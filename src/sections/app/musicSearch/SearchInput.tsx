import { ChangeEvent, FocusEvent, FC } from 'react';
import { StylesProvider, useMultiStyleConfig, useColorModeValue } from '@chakra-ui/react';
import { color } from 'src/styles/colors';
import Input from '../../../components/Input/Input';
import InputGroup from '../../../components/Input/InputGroup';
import InputRightElement from '../../../components/Input/InputRightElement';
import SpinnerSmall from '../../../components/animations/SpinnerSmall';

interface InputProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus: (event: FocusEvent<HTMLInputElement>) => void;
	inputval: string;
	placeholder: string;
	loading: string;
	label?: string;
}

const SearchInput: FC<InputProps> = (props) => {
	const styles = useMultiStyleConfig('InputWithIcon', {});

	const inputColor = useColorModeValue(...color.input);
	const inputBgColor = useColorModeValue(...color.inputBg);
	const inputPlaceholderColor = useColorModeValue(...color.placeholder);

	return (
		<InputGroup>
			<StylesProvider value={styles}>
				<Input
					color={inputColor}
					backgroundColor={inputBgColor}
					_placeholder={{ color: inputPlaceholderColor }}
					borderColor={inputColor}
					colorScheme='teal'
					variant='flushed'
					type='text'
					aria-label={props.label ? props.label : 'Search'}
					value={props.inputval}
					{...props}
					onChange={props.onChange}
					onFocus={props.onFocus}
					tabIndex={1}
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
