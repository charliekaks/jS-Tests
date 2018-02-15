var petalLove = require("./petal-love")

describe("petalLove", function () {
    var petalLover = new petalLove();
    it("returns I love you", function() {
        expect("I love you").toEqual(petalLover.howMuchILoveYou(13))
    });
    it("returns a lot", function() {
        expect("a lot").toEqual(petalLover.howMuchILoveYou(3))
    });
    it("returns not at all", function() {
        expect("not at all").toEqual(petalLover.howMuchILoveYou(6))
    });
});

