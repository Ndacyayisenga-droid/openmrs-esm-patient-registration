module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '@openmrs/esm-api': '<rootDir>/__mocks__/openmrs-esm-api.mock.tsx',
    '@openmrs/esm-module-config': '<rootDir>/__mocks__/openmrs-esm-module-config.mock.tsx',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-enzyme.ts'],
};
