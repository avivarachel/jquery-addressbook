// Add foundation dynamic functionality on page
$(document).foundation();

var getFunctions = require('./get.js');
var displayFunctions = require('./display.js');

// Set the API base url
var API_URL = "https://loopback-rest-api-demo-ziad-saab.c9.io/api";

// Get a reference to the <div id="app">. This is where we will output our stuff
var $app = $('#app');
var $buttons = $("#buttons");

// Data retrieval functions


//this starts the program by calling the function to list the
//address book entries and add the buttons to the DOM
displayAddressBooksList(0);
AddressBooksListButtons();