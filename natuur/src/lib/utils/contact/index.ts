export const transformHyphenNumber = (
  phoneNumber: string
): {
  contactHead: string;
  contactBody: string;
  contactFoot: string;
} => {
  const phoneNumberLength = phoneNumber.length;
  let contactHead;
  let contactBody;
  let contactFoot;

  if (phoneNumberLength === 11) {
    contactHead = phoneNumber.slice(0, 3);
    contactBody = phoneNumber.slice(3, 7);
    contactFoot = phoneNumber.slice(7, 11);
  }

  if (phoneNumberLength <= 10) {
    contactHead = phoneNumber.slice(0, 3);
    contactBody = phoneNumber.slice(3, 6);
    contactFoot = phoneNumber.slice(6, 10);
  }

  return { contactHead, contactBody, contactFoot };
};
