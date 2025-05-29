export function convertToNumbers({ input }: { input: string }): string {
  const map: Record<string, string> = {
    A: '4',
    B: '8',
    E: 'Ɛ',
    I: '1',
    O: 'Ø',
    R: 'г',
    S: '$',
    X: '×',
    Z: 'ℤ',
  };

  const result: string[] = [];

  for (const char of input) {
    const upperChar = char.toUpperCase();
    if (map.hasOwnProperty(upperChar)) {
      result.push(map[upperChar]);
    } else {
      result.push(char);
    }
  }

  return result.join('');
}
