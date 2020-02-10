module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'lcov'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  modulePaths: ['<rootDir>'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native' +
      '|react-navigation|@react-navigation/.*' +
      '|@react-navigation/drawer/.*' +
      '|@react-native-community/masked-view' +
      '|@react-native-community/async-storage/lib )',
  ],
  setupFiles: ['./jest.setup.ts'],
};
