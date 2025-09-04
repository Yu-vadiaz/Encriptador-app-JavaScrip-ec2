describe('Basic Math Tests', () => {
  test('basic arithmetic should work', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });
});

describe('HTML Validation', () => {
  const fs = require('fs');
  const path = require('path');

  test('index.html should exist', () => {
    const filePath = path.join(__dirname, '../index.html');
    expect(fs.existsSync(filePath)).toBe(true);
  });
});
