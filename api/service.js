import axios from "axios";
const axios = require("axios");
const options = {
  method: 'GET',
  url: 'https://indian-names.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'f95fbfe820mshd9ed96847be28eep1c9c7djsn1fb7abf38388',
    'X-RapidAPI-Host': 'indian-names.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});