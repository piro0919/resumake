import { exec } from 'child_process';
import * as fs from 'fs-extra';

const main = async () => {
  fs.copy("scripts/fonts", "node_modules/pdfmake/examples/fonts");

  exec("npm i", { cwd: "node_modules/pdfmake" }, (error, stdout, stderr) => {
    console.log(error);
    console.log(stdout);
    console.log(stderr);

    exec(
      "npx gulp buildFonts",
      {
        cwd: "node_modules/pdfmake"
      },
      (error, stdout, stderr) => {
        console.log(error);
        console.log(stdout);
        console.log(stderr);
      }
    );
  });
};

main();
