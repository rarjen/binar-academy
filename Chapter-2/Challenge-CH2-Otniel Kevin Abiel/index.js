// Otniel Kevin Abiel
import readline from "readline";
import {
  nilaiMax,
  nilaiMin,
  sorting,
  siswaLulus,
  siswaTidakLulus,
  cariNilai,
  mean,
} from "challenge/library";

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
    const nilaiArr = [];
    const validasiAngka = /^[0-9]+$/;

    do {
      let nilai = await input("Masukkan Nilai / ketik q untuk keluar: ");

      if (nilai) {
        if (nilai === "q") {
          if (!nilaiArr.length) {
            let confirm = await input(
              "Daftar nilai kosong, ingin keluar? (y/n): "
            );
            if (confirm === "y") {
              rl.close();
              break;
            }
          } else {
            const sortedArr = sorting(nilaiArr);
            let lulus = siswaLulus(sortedArr);
            let tidakLulus = siswaTidakLulus(sortedArr);
            console.info(`Nilai Tertingi: ${nilaiMax(sortedArr)}`);
            console.info(`Nilai Terendah: ${nilaiMin(sortedArr)}`);
            console.info(`Nilai rata-rata: ${mean(sortedArr)}`);
            console.info(
              `Siswa Lulus: ${lulus}, Siswa tidak lulus: ${tidakLulus}`
            );
            console.info(`Urutan nilai terendah ke tertinggi: ${sortedArr}`);

            console.info(
              `Siswa nilai 90 dan nilai 100: ${cariNilai(sortedArr)}`
            );

            rl.close();

            break;
          }
        } else if (nilai.match(validasiAngka)) {
          nilaiArr.push(parseInt(nilai));
        }
      } else {
        console.info("Harap ketikkan nilai atau q");
      }
    } while (true);
  } catch (err) {
    // jika ada error dalam operasi maka akan ditangkap disini
    console.info(err);
  }
}
main();
