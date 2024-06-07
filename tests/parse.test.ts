import { describe, expect, it } from "vitest";
import { parseStrToRgb } from "../src/parse";

describe("parser", () => {
	it("parses rgb arrays", () => {
		expect(parseStrToRgb([0, 2, 50])).toEqual({ r: 0, g: 2, b: 50 });
		expect(parseStrToRgb([20, 2, 50])).toEqual({ r: 20, g: 2, b: 50 });
	});

	it("*parses* rgb objects", () => {
		const color = {
			r: 42,
			g: 42,
			b: 42,
		};
		const parsed = parseStrToRgb(color);

		expect(parsed).toEqual(color);
		expect(parsed).not.toBe(color);
	});

	it("parses hex strings", () => {
		expect(parseStrToRgb("f0f")).toEqual({ r: 15, g: 0, b: 15 });
		expect(parseStrToRgb("#f0f")).toEqual({ r: 15, g: 0, b: 15 });
		expect(parseStrToRgb("ff00ff")).toEqual({ r: 255, g: 0, b: 255 });
		expect(parseStrToRgb("#ff00ff")).toEqual({ r: 255, g: 0, b: 255 });

		expect(() => parseStrToRgb("#fff00ff")).toThrow();
	});
});
