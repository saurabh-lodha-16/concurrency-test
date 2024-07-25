const Promise = require("bluebird");

async function A(coreFunctionName) {
  console.time(`${coreFunctionName} - A`);
  await Promise.delay(100); // Simulate async operation with delay
  console.timeEnd(`${coreFunctionName} - A`);
}

async function B(coreFunctionName) {
  console.time(`${coreFunctionName} - B`);
  await Promise.delay(200); // Simulate async operation with delay
  console.timeEnd(`${coreFunctionName} - B`);
}

async function C(coreFunctionName) {
  console.time(`${coreFunctionName} - C`);
  await Promise.delay(300); // Simulate async operation with delay
  console.timeEnd(`${coreFunctionName} - C`);
}

async function xyz() {
  console.time("xyz execution time");
  await A("xyz");
  await B("xyz");
  await C("xyz");
  console.timeEnd("xyz execution time");
}

async function abc() {
  console.time("abc execution time");
  await A("abc");
  await B("abc");
  await C("abc");
  console.timeEnd("abc execution time");
}

async function pqr() {
  console.time("pqr execution time");
  await A("pqr");
  await B("pqr");
  await C("pqr");
  console.timeEnd("pqr execution time");
}

// Start the overall timing
console.time("Total execution time");

// Create an array of the functions to be called concurrently
const tasks = [xyz(), abc(), pqr()];

Promise.all(tasks)
  .then(() => {
    console.timeEnd("Total execution time");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
