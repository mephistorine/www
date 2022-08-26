export function makeSearchResultString(value: number): string {
  const valueAsString: string = value.toString();
  const root: string = `${value} результат`;

  if (valueAsString.endsWith("0") || (value >= 10 && value <= 20)) {
    return `${root}ов`;
  }

  if (valueAsString.endsWith("1")) {
    return root;
  }

  if ([2, 3, 4].some((v) => valueAsString.endsWith(v.toString()))) {
    return `${root}а`;
  }

  return `${root}ов`;
}