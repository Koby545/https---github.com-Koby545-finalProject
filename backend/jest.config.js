// backend/jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    testMatch: ['<rootDir>/src/tests/**/*.test.(ts|tsx)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  };
  