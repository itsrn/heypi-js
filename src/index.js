export default class HeyPi {
  /**
   * Creates a new instance of HeyPi (unofficial) API.
   * @param {string} cookie - The cookie from the heypi.com/talk website. Go to there, and find the cookie in Application tab, it's called "__Host-session".
   * @param {string} cf_bm - The cf_bm cookie from the heypi.com/talk website. Can be found above the "__Host-session" cookie.
   */
  constructor(cookie, cf_bm) {
    this.cookie = cookie;
    this.cf_bm = cf_bm;
  }

  /**
   * Sends a chat message to HeyPi API and returns the response text or JSON.
   *
   * @param {string} message - The message to send.
   * @param {Object} [config={returnAsJson: false}] - The configuration options.
   * @param {boolean} [config.returnAsJson=false] - Whether to return the response as JSON.
   * @return {Promise<string|Object>} The response text or JSON.
   */
  async chat(message, config = { returnAsJson: false }) {
    var myHeaders = new Headers();
    myHeaders.append("x-api-version", "2");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      `__Host-session=${this.cookie}; __cf_bm=${this.cf_bm}`
    );
    var raw = JSON.stringify({
      text: message,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    return fetch("https://heypi.com/api/chat", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (config.returnAsJson) {
          return JSON.parse(result.split("partial")[1].split("data: ")[1]);
        } else {
          return JSON.parse(result.split("partial")[1].split("data: ")[1]).text;
        }
      })
      .catch((error) => {
        return error;
      });
  }
}
