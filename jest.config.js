/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
}

module.exports = config
