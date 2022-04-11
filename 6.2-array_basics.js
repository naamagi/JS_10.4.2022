

let people = ["Greg", "Mary", "Devon", "James"];
//1
for (let index = 0; index < people.length; index++) {
  console.log(people[index]);
}

//2
people.shift();
console.log(people);

//3
people.pop();
console.log(people);

//4
people.unshift("Matt");
console.log(people);

//5
people.push("Naama");
console.log(people);

//6
for (let index = 0; index < people.length; index++) {
  console.log(people[index]);
  if (people[index] === "Mary") {
    break;
  }
}

//7
console.log(people.slice(2, 4));

//8
console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// 11
let withBob = people.concat("Bob");
console.log("people :" + people);
console.log("withBob: " + withBob);
