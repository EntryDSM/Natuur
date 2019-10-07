export const emailRegular = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
export const passwordRegular = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
export const authenticationNumber = /^[0-9a-zA-Z]{6}$/;

export const checkOnlyNumber = (value: string): boolean =>
  /^[0-9]+$/g.test(value) || !value;
