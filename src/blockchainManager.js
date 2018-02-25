const blockchain = require("blockchain");

console.log("hello")

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

// once things are hooked up (google the error message: Uncaught ReferenceError: require is not defined)
// (12:14pm) need to add jquery library above materializecss - done @ 12:23pm;

// create a new Block in the blockchain
// 12:24pm - in progress! Checked Chrome DevTools and had messages referring to "require" not being defined, etc.
// Researched Stackoverflow, etc and could not solve. Minutes ago I remembered a lesson in PL about modules by
// Brice Wilson. Found the perfect example! Time: (1:51pm)
// I used npm to load systemjs
// I examined my target files to see if they had any dependencies? Yes for: blockchain.js & for blockchainManager.js
// Now, you can use the CommonJS syntax, using: "require" and you can add their dependency file(s);
// Add the appropriate "export" statements at the bottom of those 2 modules;
// Now, we need to fix the script references in the index.html file:
// You may need to delete unnecessary script tags?
// Add <script src="node_modules/systemjs/dist/system.js"></script>
// Got some help from Masha; looks like we need a build process: enter -> webpack
// (3:43pm) Still troubleshooting the problem.


// write some JS, like a render function that gets all the blocks from the block chain
// for each of the blocks
//   grab the template card from the dom (might give it an id like #templateCard)
//   clone the template card var dupNode = node.cloneNode([deep]);  make sure to pass deep = true
//   https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
//   select pieces of the template card dom and adjust their innerText based on info from the current block
//   append the newly created card to the list of cards (.card-container)
