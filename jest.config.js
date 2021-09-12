module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
