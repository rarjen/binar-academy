import { UserRepository } from "./user-repository";

export class UserService {
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  // memanggil class UserRepository
  save(user) {
    this.userRepository.save(user); // misalkan userRepository terkoneksi ke database
    // saat membuat unit test kita ingin membuat mock
  }

  findById(id) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
