export const setDate = (): { month: number; day: number } => {
  const newDate = new Date();

  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return { month, day };
};
