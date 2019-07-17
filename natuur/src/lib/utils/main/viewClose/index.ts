export const getIsWaitingPeriod = (): boolean => {
  if (
    new Date() > new Date("10/24/2019 17:0:0") &&
    new Date() < new Date("10/28/2019 0:0:0")
  ) {
    return true;
  }
  return false;
};

export const getWaitingPeriodConfirmedLetter = (
  isWaitingPeriod: boolean
): string => {
  return isWaitingPeriod ? "합격자 선정 중 입니다" : "로그인 하기";
};
