import cleanSet from "./8-clean_set.js";

test("returns the string test-chicken-user-id when id- is passed in", () => {
  const set = new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']);
  expect(cleanSet(set, 'id-')).toBe('test-chicken-user-id-');
});
