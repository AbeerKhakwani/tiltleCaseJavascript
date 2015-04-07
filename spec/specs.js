describe('titleCase', function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCaseThree("cat")).to.equal("Cat");
    });
    it("capitalizes the first letter of two words", function() {
        expect(titleCaseThree("hat cat")).to.equal("Hat Cat");
    });
    it("uncapitalizes the the articles", function() {
        expect(titleCaseThree("and")).to.equal("and");
    });
    it("uncapitalizes the the articles", function() {
        expect(titleCaseThree("pride and prejudice")).to.equal("Pride and Prejudice");
    });
});
