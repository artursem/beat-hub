import { ChangeEvent, FC } from 'react';
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
	inputValue: string;
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
					value={props.inputValue}
					{...props}
					onChange={props.onChange}
				/>
				{props.loading === true && <InputRightElement height='100%' children={<SpinnerSmall />} />}
			</StylesProvider>
		</InputGroup>
	);
};

export default SearchInput;
