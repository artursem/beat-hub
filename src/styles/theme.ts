import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const InputWithIcon: ComponentStyleConfig = {
	// The parts of the component
	parts: ['input', 'inputRightElement'],
	// The base styles for each part
	baseStyle: {
		input: {
			placeholder: 'Find artist...',
			color: 'gray.100',
			variant: 'flushed',
			type: 'text',
		},
		inputRightElement: {
			color: 'gray.600',
		},
	},
	// The size styles for each part
	sizes: {},
	// The variant styles for each part
	variants: {
		base: {
			input: {
				variant: 'flushed',
				type: 'text',
			},
			inputRightElement: {},
		},
	},
	// The default `size` or `variant` values
	defaultProps: {},
};

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

export const theme = extendTheme({
	config: config,
	components: {
		InputWithIcon,
	},
	fonts: {
		heading: 'Space Grotesk, sans-serif',
		body: 'Space Grotesk, sans-serif',
	},
});

export default createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
});
