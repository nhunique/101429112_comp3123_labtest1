// Method that resolves after 500ms
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({'message': 'daylayed success!'});
    }, 500);
  });
}

// Method that rejects after 500ms
function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({'error': 'delayed exception!'});
    }, 500);
  });
}

// Call resolvedPromise
resolvedPromise()
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Call rejectedPromise
rejectedPromise()
  .then(message => console.log(message))
  .catch(error => console.error(error));
