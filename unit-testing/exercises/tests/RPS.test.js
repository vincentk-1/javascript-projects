const test1 = require('../RPS.js');

describe("test", function(){

   test("returns 'TIE!' if P1 = P2", function() {
    let output = test1.whoWon('rock','rock');
    expect(output).toBe("TIE!");
   });

   test("returns 'TIE!' if P1 = P2", function() {
    let output = test1.whoWon('paper','paper');
    expect(output).toBe("TIE!");
   });

   test("returns 'TIE!' if P1 = P2", function() {
    let output = test1.whoWon('scissors','scissors');
    expect(output).toBe("TIE!");
   });

   test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    let output = test1.whoWon('rock','paper');
    expect(output).toBe("Player 2 wins!");
   });
 
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = test1.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
        let output = test1.whoWon('scissors','rock');
        expect(output).toBe("Player 2 wins!");
    });

});