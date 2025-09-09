import fs from "fs";

// export function pindahFile() {
fs.rename("moveFile.js", "lib/moveFile.js", (err) => {
  if (err) {
    throw err;
  }
  console.log("file move success");
});
// }
