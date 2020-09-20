console.log = function () {};
const assert = require("chai").assert;
const fs = require("fs");
const Structured = require("structured");

const code = fs.readFileSync("public/main.js", "utf8");

describe("", function () {
  it("", function () {
    let structureOne = function () {
      const apiKey = $apiKey;
    };

    varCallbacks = [
      function ($apiKey) {
        if ($apiKey.value === "<Your API Key>") {
          return {
            failure:
              "Did you replace `'<Your API Key>'` with your actual Rebrandly API key?",
          };
        }
        return true;
      },
    ];

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    assert.isOk(
      isMatchOne,
      varCallbacks.failure ||
        "Did you assign `apiKey` to your actual Rebrandly API key?"
    );
  });
});
