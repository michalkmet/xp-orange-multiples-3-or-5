const multiples = require('./multiples');

describe('User Story 1: Input lower than 10', () => {
  it('UAT1.1 When I pass 0 I should see 0.', () => {
    expect(multiples()).toBe(0);
  });
});
