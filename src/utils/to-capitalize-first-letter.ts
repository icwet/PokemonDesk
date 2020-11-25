const toCapitalizeFirstLetter = (str: string): string => {
  return str.replace(/^([a-zA-Z])/, (match) => match.toUpperCase());
};

export default toCapitalizeFirstLetter;
