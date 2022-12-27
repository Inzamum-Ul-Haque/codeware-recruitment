fetch("https://coderbyte.com/api/challenges/json/age-counting")
  .then((res) => res.json())
  .then((data) => console.log(data));

const splittedData = data.split(",");
let matchedKeys = [];
for (let i = 1; i < splittedData.length; i += 2) {
  if (splittedData[i].includes("age=30")) {
    matchedKeys.push(splittedData[i - 1].slice(5));
  }
}
console.log(matchedKeys);
