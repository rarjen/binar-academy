// import {
//   MyException,
//   callMe,
// } from "../../8-matchers/6-exceptions-matchers/exception.js";
import { MyException, callMe } from "../src/exception.js";
test("Exception", () => {
  expect(() => callMe("Leinto")).toThrow(); // memastikan bahwa terjadi exception-nya
  expect(() => callMe("Leinto")).toThrow(MyException); // menentukan jenis exception-nya
  expect(() => callMe("Leinto")).toThrow("ups my exception happens"); // menentukan pesan exception-nya
});

// Melakukan cover terhadap else pada exceptions.js
test("exceptions not happens", () => {
  expect(callMe("Budi")).toBe("OK");
});

/*
dengan menggunakan closure atau callback function ini maka exception tidak akan langsung di eksekusi 
melainkan akan ditangkap oleh expect terlebih dahulu lalu di eksekusi.
*/
