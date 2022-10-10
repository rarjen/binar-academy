import { conn } from "challenge/db";
import readline from "readline";

// input output JavaScript
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function input mengembalikan nilai promise
function input(question) {
  return new Promise((resolve) => {
    rl.question(question, (data) => {
      return resolve(data);
    });
  });
}

async function main() {
  try {
    let condition = true;
    do {
      let user = await input("\nUsername: ");
      let password = await input("Password: ");

      if (!user || !password) {
        console.log("Harap isi username/password");
      } else if (user !== "admin" || password !== "admin") {
        console.log("Username/Password salah");
      } else {
        rl.close();
        break;
      }
    } while (condition);
  } catch (err) {
    console.info(err);
  }
}

main();
