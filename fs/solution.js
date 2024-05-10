const fs = require('fs');

/**
 * Feladat: a függvény az adott fájlba irja a megadott tartalmat.
 * 1. Promise típussal tér vissza.
 * 2. A függvényben a `fs.writeFile` függvényt használd.
 * 3. Sikeres írás esetén a `File "${fileName}" created successfully.` szöveget adja vissza a Promise.
 * 4. Sikertelen írás esetén a Promise a hibát adja vissza.
 */
function writeFile(fileName, content) {

}

/**
 * Feladat: a függvény az adott fájlból olvassa ki a tartalmat.
 * 1. Promise típussal tér vissza.
 * 2. A függvényben a `fs.readFile` függvényt használd.
 * 3. Sikeres olvasás esetén a Promise a fájl tartalmát adja vissza.
 * 4. Sikertelen olvasás esetén a Promise a hibát adja vissza.
 */
function readFile(fileName) {

}

module.exports = { writeFile, readFile };
