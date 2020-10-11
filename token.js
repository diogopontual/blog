require('dotenv-safe').config();
const request = require("request");
const { google } = require("googleapis");
const key = require(process.env.DRIVE_CREDENTIALS_FILE);
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