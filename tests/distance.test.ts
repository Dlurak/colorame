import { expect, it } from "vitest";
import { Color } from "../src";
import { distance } from "../src/distance";

it("measures the distance between colors", () => {
	const red: Color = [255, 0, 0];
	const green: Color = [0, 255, 0];
	const blue: Color = [0, 0, 255];
	const yellow: Color = [255, 255, 0];

	expect(distance(red, green)).toBe(distance(red, blue));
	expect(distance(red, green)).toBeGreaterThan(distance(red, yellow));
	expect(distance(green, blue)).toBeGreaterThan(distance(green, yellow));
});
