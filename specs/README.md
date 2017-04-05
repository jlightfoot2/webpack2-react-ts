This directory contains some jest tests for demonstration purposes.
It also contains preprocessor.js which runs any necessary transforms
for all tests within the app. Most directories within the src/ will
have a __test__ director where the tests are housed. The tests in these
directories should mirror the files they are testing.

Again actuall tests for this app are included throughout the src/ directory

npm run test

# Update snapshots
npm run -- -n

#Examples


## Basic Reducers tests
src/reducers/__tests__

## Some snap shot tests
src/components/__tests__/
  Book-test.tsx
  NotFound-test.tsx

## Basic Enzyme tests
src/components/__tests__/
  Book-test.tsx