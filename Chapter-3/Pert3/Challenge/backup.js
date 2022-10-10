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
    do {
      let user = await input("\nMasukkan Username: ");
      let password = await input("Masukkan Password: ");

      if (!user || !password) {
        console.log("Harap isi username/password");
      } else if (user !== "admin" && password !== "admin") {
        console.log("Username/Password salah");
      } else {
        // condition = true;
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
          let username = await input("Masukkan Username Game: ");
          let password = await input("Masukkan Password Game: ");
          if (username === "q" || password === "q") {
            rl.close();
            break;
          }
          conn.query(
            `INSERT INTO user_game(username, password) VALUES('${username}', '${password}');`,
            (err) => {
              if (err) {
                console.log(err);
              }
              conn.end();
            }
          );
        } else if (input == 2) {
          let username = await input("Masukkan Username: ");
          conn.query(
            `DELETE FROM user_game WHERE username = "${username}";`,
            (err) => {
              if (err) {
                console.log(err);
              }
              conn.end();
            }
          );
        } else if (choice === "q") {
          rl.close();
          break;
        }
      }
    } while (true);
    rl.close();
  } catch (error) {
    console.log(error);
  }
}

main();
