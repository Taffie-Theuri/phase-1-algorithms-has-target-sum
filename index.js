function hasTargetSum(array, target) {

  //set object to keep track of viewed numbers
  const viewedNumber = new Set(); // assuming all values will be unique.
  for (const number of array) {

    const complement = target - number;

     if (viewedNumber.has(complement)) return true;// check if complement is in set object

     viewedNumber.add(number);//insert a number into the set object

  }
  return false;
}
/*
  Write the Big O time complexity of your function here

  time complexity = O(n)
*/


/*
  create an object to keep track of numbers we've already viewed
  iterate through each item in the array
   for current iteration get a number that if added to another number will give
   the target (x = target - no)/ check if any key on our object is the complement
  if so, return true otherwise false
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");

  //my own tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 19, 10, 6, 9], 15));//multiple pair of numbers that could add upto target

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([44, 19, 4, 6, 30], 12));

  console.log("");
}

module.exports = hasTargetSum;
