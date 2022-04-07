import { ChangeEvent, FocusEvent, FC } from 'react';
import {
	InputGroup,
	Input as InputChakra,
	InputRightElement,
	StylesProvider,
	useMultiStyleConfig,
} from '@chakra-ui/react';

import SpinnerSmall from '../animations/SpinnerSmall';

interface InputProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onFocus: (event: FocusEvent<HTMLInputElement>) => void;
	inputval: string;
	placeholder: string;
	loading: boolean;
}

const SearchInput: FC<InputProps> = (props) => {
	const styles = useMultiStyleConfig('InputWithIcon', {});

	return (
		<InputGroup>
			<StylesProvider value={styles}>
				<InputChakra
					color='gray.100'
					variant='flushed'
					type='text'
					value={props.inputval}
					{...props}
					onChange={props.onChange}
					onFocus={props.onFocus}
				/>
				{props.loading === true && (
					<InputRightElement height='100%'>
						<SpinnerSmall />
					</InputRightElement>
				)}
			</StylesProvider>
		</InputGroup>
	);
};

export default SearchInput;
