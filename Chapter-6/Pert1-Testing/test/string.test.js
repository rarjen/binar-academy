test("string", () => {
  const name = "Otniel Kevin Abiel";
  const result = name.toLowerCase();

  expect(name).toBe("Otniel Kevin Abiel");
  expect(name).toEqual("Otniel Kevin Abiel");
  expect(name).toMatch(/iel/);
  expect(result).toMatch(/abi/); //Menggunakan regex, referensi ada di Javascript Dasar
  // mencari kata iel pada name
});
