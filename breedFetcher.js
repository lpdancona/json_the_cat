const request = require("request");
const input = process.argv;
const catBreed = input[2];
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`,
  (error, response, body) => {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    if (body === "[]") {
      console.log("breed not identified");
    }
    if (error != undefined) {
      console.log("an unexpected error happened");
    }
    // console.log(body);
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof body);
    if (data[0].name === catBreed) {
      console.log(data[0].description);
    }
  }
);
