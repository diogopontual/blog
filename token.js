const request = require("request");
const { google } = require("googleapis");
const key = require("./credentials.json");

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/drive.file"],
  null
);

jwtClient.authorize(function(err, tokens) {
    console.log(tokens)
});