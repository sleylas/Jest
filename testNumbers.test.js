const filterPrice = require("./testNumber.js");
describe("Bundaries for 30", () => {
    it("Boubdary >=30", () => {
        expect(filterPrice(30)).toBe(true);
    });
    it("Boubdary < 30", () => {
        expect(filterPrice(29)).toBe(false);
    });
});