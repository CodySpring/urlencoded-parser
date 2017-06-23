const urlencodedParser = require('../index')

describe('#raw()', () => {
  it('should parse a single key into itself.', () => {
    const parsed = urlencodedParser.raw({ 'foo': 1 })
    expect(parsed.foo).toBe(1)
  })

  it('should parse a key with a child into an object.', () => {
    const parsed = urlencodedParser.raw({ 'foo.bar': 1 })
    expect(parsed.foo.bar).toBe(1)
  })

  it('should parse a key with children into an object.', () => {
    const parsed = urlencodedParser.raw({ 'foo.bar': 1, 'foo.baz': 2 })
    expect(parsed.foo.bar).toBe(1)
    expect(parsed.foo.baz).toBe(2)
  })

  it('should parse a key with nested children into an object.', () => {
    const parsed = urlencodedParser.raw({ 'foo.bar.baz': 1 })
    expect(parsed.foo.bar.baz).toBe(1)
  })
})
