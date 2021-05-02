const sum = (x: number, y?: number, z?: number) => {
  return x + (y || 0) + (z || 0);
};

export const main = () => {
  const result = sum(1);
  console.log(result);
};
