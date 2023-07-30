export const generateId = (data) => {
  return parseInt(data[data.length - 1].id) + 1;
};

export const findElement = (source, fieldToFind, value, returnedField) => {
  const result = source.find((element) => element[fieldToFind] === value);

  return result[returnedField];
};