/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getTallestDinosaur(dinosaurs) {
  //should return an empty object if there are no dinosaurs
  if(dinosaurs.length < 1){
    return {}
  }
  let tallestObject = {};
  let tallestDinoHeight = dinosaurs[0];
  for(let i = 1; i < dinosaurs.length; i++){
    if(dinosaurs[i].lengthInMeters > tallestDinoHeight.lengthInMeters){
      tallestDinoHeight = dinosaurs[i];
    }
  }

  //meters to feet conversion
  let heightInFeet = tallestDinoHeight.lengthInMeters * 3.281



  tallestObject[tallestDinoHeight.name] = heightInFeet;

  return tallestObject;

}
//getTallestDinosaur(exampleDinosaurData)

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
  //iterate through dinosaur array
  for(const dino of dinosaurs){
    //check for an id match
    if(id === dino.dinosaurId){
      //try doing a one-line return using string interpolation.
      return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${dino.mya[dino.mya.length-1]} million years ago.`
    }
  }
    //return an error message if there is no match. 
    return "A dinosaur with an ID of 'incorrect-id' cannot be found."
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
  //Returns an array of dinosaurs who were alive at the given `mya` (i.e. “millions of years ago”) value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
  //set an empty array variable to push the dinosaur names into
  let dinos = [];
  //loop through the dinosaur array to check if mya value matches mya parameter.
  for (const dino of dinosaurs) {
    //if the the mya given is in the dino mya and the key is name
    if (dino.mya.includes(mya) && key === 'name') {
      //then push the dino name
      dinos.push(dino.name);
      //if the length of the mya array is 1 and the value of mya given is the mya or is one less than the mya
    } else if (
      dino.mya.length === 1 &&
      (dino.mya - 1 === mya || dino.mya === mya)
    ) {
      //push the id into array
      dinos.push(dino.dinosaurId);
      //if the mya is included in the dino mya
    }else if (dino.mya.includes(mya)) {
      //push the id
      dinos.push(dino.dinosaurId);
    }//if the value of mya 
    else if(mya >= dino.mya[1] && mya <= dino.mya[0]){
      dinos.push(dino.dinosaurId)
    }
  }
  //return the array
  return dinos;
}

module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
