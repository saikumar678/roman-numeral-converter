import { convertToRoman } from "../src/converter";

test("Basic conversions", () => {
  expect(convertToRoman(1)).toBe("I");
  expect(convertToRoman(4)).toBe("IV");
  expect(convertToRoman(9)).toBe("IX");
  expect(convertToRoman(58)).toBe("LVIII");
  expect(convertToRoman(1997)).toBe("MCMXCVII");
});

test("Out of range throws error", () => {
  expect(() => convertToRoman(0)).toThrow();
  expect(() => convertToRoman(4000)).toThrow();
});
