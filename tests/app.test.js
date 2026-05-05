const printMessage = require('../src/app');

test('should print the correct message', () => {
  console.log = jest.fn();   // mock console.log

  printMessage();

  expect(console.log).toHaveBeenCalledWith(
    "POC-19 print function executed"
  );
});
