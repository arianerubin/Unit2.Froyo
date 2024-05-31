const userInputString = prompt(
  "Please enter the Froyo flavors you would like separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const arrFlavors = userInputString.split(",");

const ObjCount = {};
for (let i = 0; i < arrFlavors.length; i++) {
  const flavors = arrFlavors[i];
  if (!(flavors in ObjCount)) {
    ObjCount[flavors] = 1;
  } else {
    ObjCount[flavors] += 1;
  }
}

console.log(ObjCount);
