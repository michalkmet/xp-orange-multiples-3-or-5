const multiples = require('./multiples');

describe('User Story 1: Input lower than 10', () => {
  it('UAT1.1 When I pass 0 I should see 0.', () => {
    expect(multiples(0)).toBe(0);
  });
  it('UAT1.2 When I pass 3 I should see 0.', () => {
    expect(multiples(3)).toBe(0);
  });
  it('UAT1.3 When I pass 4 I should see 3.', () => {
    expect(multiples(4)).toBe(3);
  });
  it('UAT1.4 When I pass 6 I should see 8.', () => {
    expect(multiples(6)).toBe(8);
  });
  it('UAT1.5 When I pass 7 I should see 14.', () => {
    expect(multiples(7)).toBe(14);
  });
  it('UAT1.6 When I pass -6 I should see 0.', () => {
    expect(multiples(-6)).toBe(0);
  });
});

describe('User Story 2: Input greater than 9', () => {
  it('UAT2.1 When I pass 10 I should see 23.', () => {
    expect(multiples(10)).toBe(23);
  });
  it('UAT2.2 When I pass 11 I should see 33.', () => {
    expect(multiples(11)).toBe(33);
  });
  it('UAT2.3 When I pass 13 I should see 45.', () => {
    expect(multiples(13)).toBe(45);
  });
  it('UAT2.4 When I pass 16 I should see 60.', () => {
    expect(multiples(16)).toBe(60);
  });
});
