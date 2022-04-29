import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const config: InitialOptionsTsJest = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	transform: {
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
	},
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.test.json',
		},
	},
	testPathIgnorePatterns: ['<rootDir>/cypress/'],
	modulePaths: ['<rootDir>', '<rootDir>/public'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
};

export default config;
