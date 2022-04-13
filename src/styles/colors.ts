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
}

export const color: Color = {
	text: ['gray.300', 'gray.800'],
	bg: ['gray.800', 'gray.50'],
	hoverText: ['gray.200', 'gray.800'],
	hoverBg: ['gray.700', 'gray.100'],
	border: ['gray.700', 'gray.300'],
	gradient: ['linear(to-bl, gray.700, gray.800)', 'linear(to-bl, gray.200, gray.400)'],
	input: ['gray.100', 'gray.900'],
	inputBg: ['gray.800', 'gray.50'],
	placeholder: ['gray.100', 'gray.900'],
};
