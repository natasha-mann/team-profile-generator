const fs = require("fs");

const writeToFile = (fileName, generatedHTML) => {
  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write successful");
    }
  };

  fs.writeFile(`${fileName}.html`, generatedHTML, callback);
};

module.exports = writeToFile;
