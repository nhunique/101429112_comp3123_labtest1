function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    // validation
    if (!Array.isArray(mixedArray)) {
      return reject("Input must be an array");
    }

    try {
      const filtered = mixedArray
        .filter(item => typeof item === "string") // keep only strings
        .map(word => word.toLowerCase());        // lowercase remaining strings

      resolve(filtered); //resolve promise
    } catch (error) {
      reject("Error while filtering array: " + error); //reject promise
    }
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
