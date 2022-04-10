function countryToLiveIn(language, isIsland, population, country) {
  if (isIsland === false && language === "english" && population < 50000000) {
    console.log(`You should live in ${country}.`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}

countryToLiveIn("english", false, 9000000, "Israel");
countryToLiveIn("spanish", false, 9000000, "spain");
countryToLiveIn("english", true, 9000000, "italy");
countryToLiveIn("english", false, 60000000, "portugal");
