import fs from "fs";
import path from "path";
// import readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

export function saveFileByName(artist, isiFile) {
  // tujuan simpan foldernya dimana
  const folderPath = path.join("music", artist);
  // tujuan simpan filenya dimana
  const filePath = path.join(folderPath, `${artist} - ${isiFile}.mp3`);

  // bikin folder
  try {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Folder '${folderPath}' siap dipakai.`);
  } catch (error) {
    throw new Error(`Gagal bikin folder '${folderPath}': ${error.message}`);
  }

  // bikin file
  try {
    if (fs.existsSync(filePath)) {
      throw new Error(`File '${filePath}' sudah ada, tidak ditulis ulang`);
    }

    fs.writeFileSync(filePath, isiFile);
    console.log(`File '${filePath}' berhasil dibuat.`);
  } catch (error) {
    throw new Error(`Gagal bikin file: ${error.message}`);
  }
}

// function pertanyaan1() {
//   rl.question("silahkan input nama penyanyi :", (userInput) => {
//     rl.question("silahkan input judul lagunya :", (lagu) => {
//       let data = saveFileByName(userInput, lagu);
//       console.log(data);
//       rl.close();
//     });
//   });
// }

// pertanyaan1();
// contoh penggunaan
