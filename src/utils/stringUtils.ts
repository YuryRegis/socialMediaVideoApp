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

function getUriOrDefaultUser(uri: string): string {
  const _uri = Boolean(uri) ? uri : 'https://i.ibb.co/Vqyg1Cn/Captura-de-Tela-2023-11-26-a-s-00-57-46.png';
  return _uri;
}

export const stringUtils = {
  truncateName,
  getUriOrDefaultUser,
  capitalizeFirstLetter,
};
  