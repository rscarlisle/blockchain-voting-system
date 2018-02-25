const bc = require("../blockchain.js");

// you can split block and blockchain off into their own files
//const Block = require(../block.js)
//const Blockchain = require(../blockchain.js)

describe( "Block", function() {
    let d = Date.now();
    let testBlock = new bc.Block(1, d, {whoVoted: "Randy", votedFor: "green"})
    let testBlock2 = new bc.Block(2, Date.now(), {whoVoted: "Randy", votedFor: "green"})    
    it("calculates a hash", function() {
        expect(testBlock.hash).toMatch(/[a-zA-Z0-9]{64}/);
        // expect(testBlock.hash).toBe(true);
    })
    it("it confirms timestamp is correct", function() {
        // let testBlock = new bc.Block(1, Date.now(), {whoVoted: "Randy", votedFor: "green"})
        expect(testBlock.timestamp).toBe(d);
    })
    it("it confirms who voted", function() {
        // let testBlock = new bc.Block(1, Date.now(), {whoVoted: "Randy", votedFor: "green"})
        expect(testBlock.data.whoVoted).toBe('Randy');
    }) 
    
    it("it points to previous-hash correctly", function() {
        // let testBlock = new bc.Block(1, Date.now(), {whoVoted: "Randy", votedFor: "green"})
        expect(testBlock2.previousHash).toEqual('');
    })    
 });