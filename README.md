# 🍰 heypi-js
A simple (unofficial) way to use HeyPi in NodeJS.

# ⛔ ATTENTION
The current version, `v1.0.0` is no longer working and supported. See [the related issue](https://github.com/itsrn/heypi-js/issues/1) for more details.

# 📑 Notice
This personal project *is not* affiliated with Inflection AI and is only for *educational purposes* only. Using this may result in violating [Pi TOS](https://heypi.com/policy#terms).
I *am not* responsible for any consequences, damages, or losses arising from the use or misuse of this repository or the content provided by Pi. Users are solely responsible for their actions and any repercussions that may follow. By using the code available in this repository, you agree to these terms and the license of the repo and the [privacy policy of Pi](https://heypi.com/policy#privacy).

# 📩 Installing and using
Download this repo using the `Download` green button or clone this repo using `git clone https://github.com/itsrn/heypi-js.git`.

After this, you can try and use the `./test/index.js` file. Before running it, you will need to configure two cookies.

To get your cookies (free), follow these steps:
- Go to https://heypi.com/talk (no need to register)
- Open your developer tools using <kbd>ctrl</kbd> (or <kbd>command</kbd> if you are on mac) + <kbd>shift</kbd> + <kbd>i</kbd>.
- Then, go to your Storage (in Chrome it's called Application) tab > at the left menu, select "Cookies".
- You'll need to copy two cookies values: `__cf_bm` and `__Host-session`
- Paste your cookies like that:
```js
import HeyPi from "./src/index.js";
const pi = new HeyPi(
  "__Host-session cookie",
  "__cf_bm cookie"
);
const message = "Hello!";
await pi
  .chat(message, { returnAsJson: false })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });
```
- After completing these steps, you can run this code and enjoy!

# 🔍 Features
>  Promise based

> Able to return the response as a JSON (`{returnAsJson: true\false}`)

> Use your cookies

> Because this uses your cookies, it's able to remember your conversation history.

----------------------------------
*Made with 🧆 by Ron Nuss, 2023.*
