test("array", () => {
  const names = ["Otniel", "Kevin", "Abiel"];
  expect(names).toContain("Kevin"); // mengecek salah 1 data di dlm array
  expect(names).toEqual(["Otniel", "Kevin", "Abiel"]); // toEqual membandingkan data

  //array object di dalam array
  const persons = [
    {
      name: "Leinto",
    },
    {
      name: "Otniel",
    },
  ];
  expect(persons).toContainEqual({ name: "Otniel" }); // mengecek array object di dalam array
  expect(persons).toEqual([{ name: "Leinto" }, { name: "Otniel" }]); // toEqual membandingkan data
});
