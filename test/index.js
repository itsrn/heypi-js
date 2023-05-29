import HeyPi from "./src/index.js";
const pi = new HeyPi(
  "Your cookie",
  "Your cookie again"
);

await pi.chat("Hello! ", {returnAsJson: false})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });
