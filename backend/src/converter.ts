
export function convertToRoman(num: number): string {
  if (num < 1 || num > 3999) {
    throw new Error("Input must be between 1 and 3999.");
  }

  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      result += syms[i];
    }
  }
  return result;
}
