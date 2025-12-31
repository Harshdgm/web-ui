export const hasGrayBg = (row: number, col: number): boolean => {
  if (row % 2 === 1) return col % 2 === 0; // odd rows → 2,4
  return col % 2 === 1; // even rows → 1,3
};
