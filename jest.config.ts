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
	modulePaths: ['<rootDir>', '<rootDir>/public/'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
	},
};

export default config;
