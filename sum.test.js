const sum = require("./sum.js");
describe("Testing sum function", () => {
    it("Sum of positive numbers", () => {
        expect(sum(1, 4)).toBe(5);
        expect(sum(1, 4)).toEqual(5);
    });
    it("Bigger smaller definition", () => {
        expect(sum(1, 4)).toBeGreaterThan(4);
        expect(sum(1, 4)).toBeLessThan(6);
    });
    it("Bigger smaller definition", () => {
        expect(sum(1, -2)).toBeLessThan(0);
    });
});