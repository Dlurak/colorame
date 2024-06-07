import { describe, expect, it } from "vitest";
import { colorToName } from "../src";

describe("parser", () => {
	it("finds exact matches", () => {
		expect(colorToName({ r: 102, g: 205, b: 170 })).toBe("mediumaquamarine");
		expect(colorToName({ r: 238, g: 130, b: 238 })).toBe("violet");
		expect(colorToName("#d68f49")).toBe("peru");

		expect(
			colorToName("#424242", {
				answerToEverything: { r: 42, g: 42, b: 42 },
				other: { r: 24, g: 24, b: 24 },
			}),
		).toBe("answerToEverything");
	});

	it("finds not exact matches", () => {
		expect(colorToName({ r: 215, g: 143, b: 73 })).toBe("peru");
		expect(colorToName({ r: 195, g: 123, b: 53 })).toBe("peru");

		expect(
			colorToName("#484848", {
				answerToEverything: { r: 42, g: 42, b: 42 },
				other: { r: 24, g: 24, b: 24 },
			}),
		).toBe("answerToEverything");
	});
});
