let mySet1 = new Set([1, 2, 3, 4, 5]);
let mySet2 = new Set([6, 7, 2, 3, 5]);

let newSet = (set1, set2) => {
  let mySet = new Set();
  set1.forEach((value) => {
    if (set2.has(value)) {
        mySet.add(value)
    }
  });
  return mySet
};
console.log(newSet(mySet1, mySet2));
