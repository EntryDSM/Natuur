export const formatDate = ({
  month,
  day
}: {
  month: number;
  day: number;
}): { todayYear: string; todayMonth: string; todayDate: string } => {
  const todayYear = `${new Date().getFullYear()}`.slice(2);
  const todayMonth = month < 10 ? `0${month}` : `${month}`;
  const todayDate = day < 10 ? `0${day}` : `${day}`;

  return { todayYear, todayMonth, todayDate };
};
