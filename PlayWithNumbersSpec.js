var PlayWithNumbers = require("./PlayWithNumbers")

describe("PlayWithNumbers" , function() {
    var PlayWithNumbers = new PlayWithNumbers();

     it("The numbers are valid", function(){
        expect(PlayWithNumbers.digPow(89, 1)).Equalsto(1); 
     });
});