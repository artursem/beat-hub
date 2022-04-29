interface Color {
	text: [string, string];
	bg: [string, string];
	hoverText: [string, string];
	hoverBg: [string, string];
	border: [string, string];
	gradient: [string, string];
	input: [string, string];
	inputBg: [string, string];
	placeholder: [string, string];
	navBg: [string, string];
}

export const color: Color = {
	text: ['gray.800', 'gray.300'],
	bg: ['gray.50', 'gray.800'],
	hoverText: ['gray.800', 'gray.200'],
	hoverBg: ['gray.100', 'gray.700'],
	border: ['gray.300', 'gray.700'],
	gradient: ['linear(to-bl, gray.200, gray.400)', 'linear(to-bl, gray.700, gray.800)'],
	input: ['gray.900', 'gray.100'],
	inputBg: ['transparent', 'transparent'],
	placeholder: ['gray.900', 'gray.100'],
	navBg: ['blackAlpha.300', 'blackAlpha.600'],
};
