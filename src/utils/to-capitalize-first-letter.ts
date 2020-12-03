const toCapitalizeFirstLetter = (str: string): string => {
  const formatStr = str.trim();
  return `${formatStr.substring(0, 1).toUpperCase()}${formatStr.substring(1).toLowerCase()}`;
};

export default toCapitalizeFirstLetter;
