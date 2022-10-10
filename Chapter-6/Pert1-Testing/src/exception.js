// Membuat Exception
export class MyException extends Error {}

export const callMe = (name) => {
  if (name === "Leinto") {
    throw new MyException("ups my exception happens");
  } else {
    return "OK";
  }
};
