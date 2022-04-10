// 1. if else
function passwordValidation1(password) {
  if (password.length >= 7) {
    return "strong";
  } else if (password.length < 7) {
    return "weak";
  }
}

// 2. ternary conditional expression
function passwordValidation2(password) {
  return password.length >= 7 ? "strong" : "weak";
}

// 3.  a function that uses a && logical operator.
function passwordValidation3(password) {
  if (password && password.length >= 7) {
    return "strong";
  } else if (password && password.length < 7) {
    return "weak";
  }
}

// 4. an “advanced” password validation function
function passwordValidation4(password) {
  let lowercased = password.toLowerCase();
  let hasCapital = lowercased !== password ? true : false;
  let classification = "";
  classification =
    password.length < 7
      ? "weak"
      : hasCapital && password.length >= 7
      ? "very strong"
      : "strong";
  return classification;
}

console.log("func1:" + passwordValidation1("func1"));
console.log("func1longer:" + passwordValidation1("func1longer"));

console.log("func2:" + passwordValidation2("func2"));
console.log("func2longer:" + passwordValidation2("func2longer"));

console.log("home:" + passwordValidation3("home"));
console.log("homealone:" + passwordValidation3("homealone"));

console.log("home:" + passwordValidation4("home"));
console.log("homealone:" + passwordValidation4("homealone"));
console.log("homeAlone:" + passwordValidation4("homeAlone"));
