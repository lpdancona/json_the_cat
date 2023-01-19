const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("body:", body); // Print the HTML for the Google homepage.
      if (error) {
        callback(error);
        return;
      }
      // console.log(body);
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("breed not found!");
        return;
      }
      const desc = data[0].description;
      if (data[0].name === breedName) {
        callback(undefined, desc);
        return;
      }
    }
  );
};

module.exports = { fetchBreedDescription };
// const fetchBreedDescription = function (breedName, callback) {};
