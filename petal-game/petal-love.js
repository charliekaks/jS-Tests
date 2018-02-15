/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/
7,8,9,10,11,12,13,14,15

// Constructor for the method 
var petalLove = function(noPetals){
    this.noPetals = noPetals;
}

petalLove.prototype.howMuchILoveYou = function (petalsNumber) {
        ptNum = petalsNumber;
        while(petalsNumber>6){
            ptNum = petalsNumber - 6;
            petalsNumber-=6;
        }
        switch (ptNum) {
            case 1:
                return "I love you"
                break;
            case 2:
                return "a little";
                break;
            case 3:
                return "a lot";
                break;
            case 4:
                return "passionately";
                break;
            case 5:
                return "madly";
                break;
            case 6:
                return "not at all";
                break;
            default:

                break;
        }
}

module.exports = petalLove;