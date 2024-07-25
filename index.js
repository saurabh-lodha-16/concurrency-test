const Promise = require("bluebird");

async function A(count, coreFunctionName) {
  await Promise.delay(100); // Simulate async operation with delay
  count += 10;
  console.log(
    `${coreFunctionName}: A completed, count = ${count}, time = ${new Date().toISOString()}`
  );
  return count;
}

async function B(count, coreFunctionName) {
  await Promise.delay(200); // Simulate async operation with delay
  count += 10;
  console.log(
    `${coreFunctionName}: B completed, count = ${count}, time = ${new Date().toISOString()}`
  );
  return count;
}

async function C(count, coreFunctionName) {
  await Promise.delay(300); // Simulate async operation with delay
  count += 10;
  console.log(
    `${coreFunctionName}: C completed, count = ${count}, time = ${new Date().toISOString()}`
  );
  return count;
}

async function xyz() {
  let count = 0;
  count = await A(count, "xyz");
  count = await B(count, "xyz");
  count = await C(count, "xyz");
  console.log(`xyz completed at ${new Date().toISOString()}`);
}

async function abc() {
  let count = 0;
  count = await A(count, "abc");
  count = await B(count, "abc");
  count = await C(count, "abc");
  console.log(`abc completed at ${new Date().toISOString()}`);
}

async function pqr() {
  let count = 0;
  count = await A(count, "pqr");
  count = await B(count, "pqr");
  count = await C(count, "pqr");
  console.log(`pqr completed at ${new Date().toISOString()}`);
}

// Create an array of the functions to be called concurrently
const tasks = [xyz(), abc(), pqr()];

Promise.all(tasks)
  .then(() => {
    console.log("All tasks completed at", new Date().toISOString());
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
