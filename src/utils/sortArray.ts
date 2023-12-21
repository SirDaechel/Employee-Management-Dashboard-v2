export const sortArray = (array: any[], property: string, order: string) => {
  const sortedArray = [...array].sort((a, b) => {
    if (typeof a[property] === "string") {
      return order === "asc"
        ? a[property].localeCompare(b[property])
        : b[property].localeCompare(a[property]);
    } else {
      return order === "asc"
        ? a[property] - b[property]
        : b[property] - a[property];
    }
  });
  return sortedArray;
};
