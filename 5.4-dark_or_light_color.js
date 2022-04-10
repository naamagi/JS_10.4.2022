
function colorDescriber(color) {
  let type = "";
  let lowercasedColor = color.toLowerCase();
  switch (lowercasedColor) {
    case "yellow":
    case "pink":
    case "orange":
      type = "light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      type = "dark color";
      break;
    default:
      type = "unknown color";
  }
  return type;
}
console.log(colorDescriber("pink"));
console.log(colorDescriber("YELLOW"));
console.log(colorDescriber("brown"));
console.log(colorDescriber("purple"));
console.log(colorDescriber("Orange"));
console.log(colorDescriber("blue"));
console.log(colorDescriber("gREen"));
