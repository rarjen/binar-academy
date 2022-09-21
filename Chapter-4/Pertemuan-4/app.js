const { users } = require("./models");

async function main() {
  // create data
  // const user = await users.create({
  //   name: "Peter Parker",
  //   // email: "jena@gmail.com",
  //   password: "password123",
  // });
  // console.log(user);
  // find all
  const usersAll = await users.findAll();
  usersAll.forEach((data) => {
    console.info(`Id: ${data.id}`);
    console.info(`First Name: ${data.name}`);
    // console.info(`Email: ${data.email}`);
    console.info(`Password: ${data.password}`);
    console.info("------------------------");
    console.log(data.get());
  });
  // console.log(usersAll.length);
  //findAll filter
  // const users = await users.findAll({
  //   where: {
  //     id: 2,
  //   },
  // });
  // mencari head array find by id
  // const userAll2 = await users.findOne({
  //   where: {
  //     id: 3,
  //   },
  // });
  // console.log(userAll2.get());
  // update data
  // const updated = await users.update(
  //   {
  //     name: "Stephen Strange",
  //     password: "password321",
  //   },
  //   {
  //     where: {
  //       id: 3,
  //     },
  //   }
  // );
  // console.log(updated);
  //delete data
  // const deleted = await users.destroy({
  //   where: {
  //     id: 4,
  //   },
  // });
}
main();
