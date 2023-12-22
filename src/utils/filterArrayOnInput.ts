export const filterArrayOnInput = (
  array: any[],
  property: string,
  query: string
) => {
  return array.filter((arr) =>
    arr[property].toLowerCase().includes(query.toLowerCase())
  );
};
