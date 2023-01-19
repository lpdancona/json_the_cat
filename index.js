const { fetchBreedDescription } = require("./breedFetcher");
const input = process.argv;
const breedName = input[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
