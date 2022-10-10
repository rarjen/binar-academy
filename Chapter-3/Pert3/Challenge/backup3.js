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
    let user = await input("\nUsername: ");
    let password = await input("Password: ");

    if (!user || !password) {
      console.log("Harap isi username/password");
    } else if (user !== "admin" || password !== "admin") {
      console.log("Username/Password salah");
      rl.close();
    } else {
      while (condition) {
        console.log("Login Success\n");
        console.info(`   
1. Input
2. Print
3. Update
4. Delete
q. quit
          `);
        let choice = await input("Masukkan Pilihan: ");
        if (choice == 1) {
          let user_games = await input("User Games / ketik q untuk keluar: ");
          let user_pasw = await input("User Password / ketik q untuk keluar: ");

          if (user_games === "q" || user_pasw === "q") {
            condition = false;
          } else {
            console.log(user_games);
            console.log(user_pasw);
          }
        } else if (input == 2) {
          console.log("print");
        } else if (input == 3) {
          console.log("update");
        } else if (input == 4) {
          console.log("delete");
        } else if (choice === "q") {
          rl.close();
          break;
        }
      }
      rl.close();
    }
  } catch (error) {
    console.log(error);
  }
}

main();
