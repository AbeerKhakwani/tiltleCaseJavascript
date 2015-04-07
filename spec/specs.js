describe('titleCase', function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCaseThree("cat")).to.equal("Cat");
    });
    it("capitalizes the first letter of two words", function() {
        expect(titleCaseThree("hat cat")).to.equal("Hat Cat");
    });
    it("uncapitalizes the the articles", function() {
        expect(titleCaseThree("jill and")).to.equal("Jill And");
    });
    it("uncapitalizes the the articles in a multy word title", function() {
        expect(titleCaseThree("pride and prejudice")).to.equal("Pride and Prejudice");
    });
    it("uncapitalizes the the articles except if they are the first word", function() {
        expect(titleCaseThree("the cat and the hat")).to.equal("The Cat and the Hat");
    });
});
