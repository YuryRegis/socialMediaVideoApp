function capitalizeFirstLetter(str: string): string {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
      .trim();
  };

function truncateName(name: string, length: number): string {
  if (name.length > length) {
    return name.substring(0, length) + '...';
  }
  return name;
};


export const stringUtils = {
  truncateName,
  capitalizeFirstLetter,
};
  