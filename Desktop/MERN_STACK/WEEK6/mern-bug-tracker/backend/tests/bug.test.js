const Bug = require('../models/Bug');

describe('Bug Model', () => {
  it('should create a bug with default status', () => {
    const bug = new Bug({ title: 'Test Bug', description: 'Test description' });
    expect(bug.status).toBe('open');
    expect(bug.title).toBe('Test Bug');
    expect(bug.description).toBe('Test description');
  });
});
