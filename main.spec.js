const main = require('./main');

function test(n, expected) {
    let actual = main.multiple(n)
    expect(actual).toBe(expected)
  }

  test("basic tests", () => {
    test(10,23)
  });