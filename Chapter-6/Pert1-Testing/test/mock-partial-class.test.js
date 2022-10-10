import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service.js";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock partial class findById", () => {
  const user = {
    id: 1,
    name: "Kevin",
  };
  const findByIdMock = jest.spyOn(repository, "findById"); // hanya melakukan mock thd findById pada repository
  // dia sudah jadu mock dan tidak memanggil function aslinya
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test.failing("test mock partial findAll", () => {
  // ini akan memanggil asli findAll dari repository, bukan lagi mock nya
  service.findAll(); // Error not implemented
});
