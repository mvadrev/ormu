// This Node.js server is for a single node
// There maybe multiple autonomous nodes
// A user here for example selects from a list 'choices', cache_size = 3
// Everytime a value is selected by the user from the list, the program checks if the key is already present in the cache object
// If value is there then shift position by -1 else insert to the top of the row by deleting the element with last index
// There is atleast 1 central node and one or more edge locations
// API requests from client side are always placed to the central node.
// The request takes in a location object and choice from the choices array
// Depending on distance, the nearest node will reply back to the client
// It will also check the stack object to see if the same choice is present and if the stack if full
// Accordingly, it updates the stack
// The node will also send a post request with the current stack to all other nodes to be updated
// A central list of all nodes is kept in both central and sec nodes
// in case client API request results in error, api request to next nearest node is placed if promise is not returned (Automatic concurrent failover)

const express = require("express");
const app = express();
var bodyParser = require("body-parser");

//Set base URL

base_url = "Insert_your_url_here";

//Central node is always node_id = "0"
node_id = "0";

node_location = [{ x: "200", y: "500" }];
// Configure Choices
choices = [
  {
    Name: "Dexter's Laboratory",
    Name: "Bird Man",
    Name: "Sponge Bob",
    Name: "Kenen & Kel"
  }
];

// Helper Functions

const checkIfKeyExtists = () => {};

const InsertKeyToHead = () => {};

const moveKeyFwd = () => {};

const deleteLeastUsedKey = () => {};

const replicateDatainAllNodes = () => {};

const AutoFailOverConnect = () => {};

// Nodes list
nodes_list = [{}];

// Define cache size
cache_size = 3;

// Initially set cache object to blank
let lru_cache = [{}];
// Initially set choice to blank. When client makes a sends an api request to central server with choice then curren_choice = choice
current_choice = "";

// GET API for current lru_cache object
app.get("/current_lru_cache", function(req, res) {
  res.send(lru_cache);
});

// Post new choice into lru_cache_object
app.post("/request", function(req, res) {
  res.send("success");
});

app.listen(3000, console.log("listening on 3000"));
