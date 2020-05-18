/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import 'regenerator-runtime/runtime'; // due to error regeneratorRuntime(not transpiling await/async) is not defined

// export default is used to export a single class, function or primitive
export default class Search {
  constructor(query) {
    // this query parame is the one that we need to specify
    // whenever we create a new object based on Search class
    this.query = query;
  }

  /**
     * Using Google Custom Search Api to search for input query and return json data
     * json() method returns a promise that resolves with the result of parsing the
     * body text as JSON
     * @retun every async func returns a promise
     */
  async getResult(startIndex = 1) {
    try {
      const key = 'AIzaSyD7J2_txRFfn1GMfwCF0U7is1HQilKUnog';
      const result = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=006573945864285428791:zcwpahc71w9&q=${this.query}&&start=${startIndex}`);
      if (result != null) {
        const data = await result.json(); // returns promise
        this.result = data.items; // adding new property to Search object
      }
    } catch (error) {
      console.error(error);
    }
  }
}
