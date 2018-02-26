const blockchain = require("blockchain");
let testBlock = new blockchain.Block(1, Date.now(), {voter: "Masha", votedFor: "Justin"})
console.log(testBlock)

const y = {
    "chain": [
        {
            "index": 0,
            "previousHash": "0",
            "timestamp": "02/21/2018",
            "data": "Genesis block",
            "hash": "dfcf53d3f814a71cf77cbc78da42e07d6b203861dacd1e6d80bc06b1457660ef",
            "nonce": 0
        },
        {
            "index": 1,
            "previousHash": "dfcf53d3f814a71cf77cbc78da42e07d6b203861dacd1e6d80bc06b1457660ef",
            "timestamp": "21/02/2017",
            "data": {
                "amount": 4
            },
            "hash": "00000a59b97c1404602eeef09b73b38e05794c8179678b92849571ce81213687",
            "nonce": 307513
        },
        {
            "index": 2,
            "previousHash": "00000a59b97c1404602eeef09b73b38e05794c8179678b92849571ce81213687",
            "timestamp": "21/08/2017",
            "data": {
                "amount": 8
            },
            "hash": "0000062d6699c27294c093d2073f908ed3db5c68d4695bb2070afbacbdd2d911",
            "nonce": 11441
        }
    ],
    "difficulty": 5
}
/**
 * Handlebars section
 */
// Read in the template's HTML content
const source = $("#cardTemplate").html();
// Compile it
const template = Handlebars.compile(source);
// Render the chain array
const html = template(y);
// Append to the output area
$("#cards").append(html);