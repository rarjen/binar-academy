import { UserRepository } from "../src/user-repository.js";
import { UserService } from "../src/user-service.js";

jest.mock("../src/user-repository.js"); // melakukan mock modules

const repository = new UserRepository();
const service = new UserService(repository); // mengirimkan mock object
/*
Catatan:
- Ketika kita buat repository = new UserRepository(), sebenarnya ini membuat sebuah mock object
- ketika kita buat new UserRepository(), sebenarnya ini memanggil sebuah constructor function,
jadi seakan-akan ini akan dibuatkan mock object-nya
- jadi ketika kita kirimkan object repository nya ke dalam UserService, sebenarnya repository ini adalah mock object  
*/
test("test mock user save", () => {
  const user = { id: 1, name: "Leinto" };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock class findById", () => {
  const user = { id: 1, name: "leinto" };
  repository.findById.mockReturnValueOnce(user); // mock
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1); // pernah dipanggil dengan param 1
});

test("test mock class findAll", () => {
  const users = [
    { id: 1, name: "Leinto" },
    { id: 2, name: "Otniel" },
  ];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
