/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  // Declared variables to hold the longest dinosaur name and length.
  let longestDinosaurName;
  let longestDinosaurLength = 0;
  // For of Loop is equally efficient. Used forEach method to compare lengths of all the dinosaurs.
  // Each length that is greater than the previous longest triggers the execution part of the conditional.
  // The execution only assigns to the previously declared variables the name and length of the longest dinosaur.
  dinosaurs.forEach(dinosaur => {
    if (dinosaur.lengthInMeters > longestDinosaurLength) {
      longestDinosaurName = dinosaur.name;
      longestDinosaurLength = dinosaur.lengthInMeters;
    }
  });
  // if no dinosaurs were found, return an empty object.
  // Otherwise return the longest dinosaur {as an Object[]} name(Key) and length(Value).
  if (longestDinosaurName === undefined) {
    return result = {};
  }
  return result = { [longestDinosaurName]: longestDinosaurLength * 3.281 };
}


/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  // declared a variable and assigned it using .find() method, the dinosaur object that matches the given ID.
  let dino = dinosaurs.find(dinosaur => dinosaur.dinosaurId === id);
  // if no dinosaur was found, return an error message.
  // Otherwise return the formatted description of the dinosaur. Note: Math.min(...dino.mya) returns the smallest value in the array. Maybe dino.mya[1] works just as well.
  if (dino === undefined) {
    return result = `A dinosaur with an ID of '${id}' cannot be found.`
  }
  return result = `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${Math.min(...dino.mya)} million years ago.`
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  // filtered the dinosaurs array to only include the objects of the dinosaurs who lived during the given time period using the .filter() method.
  // Chained it with the .map() method to return an array of dinosaur IDs or whichever key is provided from the element of the filtered down array.
  return dinosaurs.filter(dinosaur => {
    if (dinosaur.mya.length === 1) {
      return dinosaur.mya[0] === mya || mya === (dinosaur.mya[0] - 1)
    } else {
      return dinosaur.mya[0] >= mya && mya >= dinosaur.mya[1]
    }
  }).map(dinosaur => dinosaur[key] || dinosaur.dinosaurId);
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
