// use Cookie
const getCookie = sessionStorage.getItem("token");
const setCookie = (value: string): void =>
  sessionStorage.setItem("token", value);

export { getCookie, setCookie };
