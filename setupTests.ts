import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';
import { jestPreviewConfigure } from 'jest-preview';

loadEnvConfig(__dirname, true, { info: () => null, error: console.error });

// ./config/jest/setupTests.js

// Should be path from root of your project
jestPreviewConfigure({
	publicFolder: 'static', // No need to configure if `publicFolder` is `public`
});
jestPreviewConfigure({ autoPreview: true });
