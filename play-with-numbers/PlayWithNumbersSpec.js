var PlayWithNumbers = require("./PlayWithNumbers")

describe("PlayWithNumbers" , function() {
    var playWithNumbers = new PlayWithNumbers();

     it("The numbers are valid", function(){
        expect(playWithNumbers.digPow(89, 1)).toEqual(1); 
     });
});