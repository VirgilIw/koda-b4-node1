import fs from "fs";

// writeFile function with filename, content and callback function
export function buatFile() {
  fs.writeFile(
    "maverick city - coba.mp3",
    "Learn Node FS module",
    function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    }
  );
}
