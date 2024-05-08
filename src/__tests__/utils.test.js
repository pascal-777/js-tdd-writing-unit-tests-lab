import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true when the word is the same forward and backward", () => {
        const word = "racecar";

        const result = isPalindrome(word);

        expect(result).toBe(true);
    });
    it("returns false when the word is not the same forward and backward", () => {
        const word = "car";

        const result = isPalindrome(word);

        expect(result).toBe(false);
    });
})