// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev82988.service-now.com/',
  username: 'admin',
  password: 'Srish@1001'
};


/**
 * Import the Node.js request package.
 * See https://www.npmjs.com/package/request
 */
const request = require('request');


// We'll use this regular expression to verify REST API's HTTP response status code.
const validResponseRegex = /(2\d\d)/;

/**
 * @callback iapCallback
 * @description A [callback function]{@link
 *   https://developer.mozilla.org/en-US/docs/Glossary/Callback_function}
 *   is a function passed into another function as an argument, which is
 *   then invoked inside the outer function to complete some kind of
 *   routine or action.
 *
 * @param {*} responseData - When no errors are caught, return data as a
 *   single argument to callback function.
 * @param {error} [errorMessage] - If an error is caught, return error
 *   message in optional second argument to callback function.
 */





/**
 * @function get
 * @description Call the ServiceNow GET API. Sets the API call's method and query,
 *   then calls sendRequest().
 *
 * @param {object} callOptions - Passed call options.
 * @param {string} callOptions.serviceNowTable - The table target of the ServiceNow table API.
 * @param {iapCallback} callback - Callback a function.
 * @param {(object|string)} callback.data - The API's response. Will be an object if sunnyday path.
 *   Will be HTML text if hibernating instance.
 * @param {error} callback.error - The error property of callback.
 */
function get(callOptions, callback) {
  callOptions.method = 'GET';
  callOptions.query = 'sysparm_limit=1';
  sendRequest(callOptions, (results, error) => callback(results, error));
}




/**
 * @function main
 * @description Tests get() and post() functions.
 */
function main() {
  get({ serviceNowTable: 'change_request' }, (data, error) => {
    if (error) {
      console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
  });
  post({ serviceNowTable: 'change_request' }, (data, error) => {
    if (error) {
      console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`)
  });
}


// Call main to run it.
main();