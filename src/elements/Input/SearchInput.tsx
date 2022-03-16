import { ChangeEvent } from 'react';
import {
	InputGroup,
	Input as InputChakra,
	InputRightElement,
	StylesProvider,
	useMultiStyleConfig,
	useStyles,
} from '@chakra-ui/react';

import SpinnerSmall from '../animations/SpinnerSmall';

interface InputProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	inputValue: string;
	loading: boolean;
}

const SearchInput = (props: InputProps) => {
	const styles = useMultiStyleConfig('InputWithIcon', {});

	return (
		<InputGroup>
			<StylesProvider value={styles}>
				<InputChakra
					placeholder='Find artist...'
					color='gray.100'
					variant='flushed'
					type='text'
					value={props.inputValue}
					onChange={props.onChange}
				/>
				{props.loading === true && <InputRightElement height='100%' children={<SpinnerSmall />} />}
			</StylesProvider>
		</InputGroup>
	);
};

export default SearchInput;
