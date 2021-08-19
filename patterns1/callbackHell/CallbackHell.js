//* CALLBACK HELL//////////////////
const {
  readdir,
  readFile,
  writeFile
} = require("fs");

const {
  join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


// function that reads inbox and saves it to file
function contentDir(error, files) {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => fileRead(file));
}

// function that starts other processes (reads each row of the inbox, reverses and writes them)
// funciones dentro de fileRead, sino no reconoce parámetros
function fileRead(file) {
  readFile(join(inbox, file), "utf8", fileContent);

  //reads each row of the inbox, reverses
  function fileContent(error, data) {
    if (error) return console.log("Error: File error");
    writeFile(join(outbox, file), reverseText(data), showResult);
  }

  //write result
  function showResult(error) {
    if (error) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`)
  }
}
//process initiating function
readdir(inbox, contentDir);