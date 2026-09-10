export type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const processInput = (item: ClassValue): void => {
    if (!item) return;
    if (typeof item === 'string' || typeof item === 'number') {
      classes.push(String(item));
    } else if (Array.isArray(item)) {
      item.forEach(processInput);
    } else if (typeof item === 'object') {
      for (const [key, value] of Object.entries(item)) {
        if (value) classes.push(key);
      }
    }
  };

  inputs.forEach(processInput);
  return classes.join(' ');
}
