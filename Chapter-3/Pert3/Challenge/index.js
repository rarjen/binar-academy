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
    let user = await input("\nUsername: ");
    let password = await input("Password: ");
    console.log(user);
    console.log(password);
    rl.close();
    conn.end();
  } catch (err) {
    console.log(err);
  }
}

main();
