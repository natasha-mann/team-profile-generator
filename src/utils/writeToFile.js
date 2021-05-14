const fs = require("fs");

const writeToFile = (fileName, generatedHTML) => {
  const dir = "./dist";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
    });
  }

  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write successful");
    }
  };

  fs.writeFile(`./dist/${fileName}.html`, generatedHTML, callback);
};

module.exports = writeToFile;
