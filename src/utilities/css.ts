type Falsy = boolean | undefined | null | 0;

function remove_duplicates(arr:(string | Falsy)[]) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}

export function classNames(...classes:(string | Falsy)[]) {
  const uniqueClasses = remove_duplicates(classes.filter(Boolean))
  return uniqueClasses.join(' ');
}

export function variationName(name: string, value: string) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}