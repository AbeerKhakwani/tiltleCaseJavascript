describe('titleCase', function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });
    it("capitalizes the first letter of two words", function() {
        expect(titleCaseTwo("hat cat")).to.equal("Hat Cat");
    });

});
