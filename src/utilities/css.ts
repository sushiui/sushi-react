type Falsy = boolean | undefined | null | 0;

function removeDuplicates(arr:(string | Falsy)[]) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}

export function classNames(...classes:(string | Falsy)[]) {
  const uniqueClasses = removeDuplicates(classes.filter(Boolean))
  return uniqueClasses.join(' ');
}

export function variationName(name: string, value: string) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}