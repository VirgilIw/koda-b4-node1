import fs from "fs";

// export function buatFolder() {
fs.mkdir("music", (err) => {
  if (err) {
    throw err;
  }
  console.log("folder created successfully");
});
// }
