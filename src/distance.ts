import { Color } from "./";
import { parseStrToRgb } from "./parse";

export function distance(color1: Color, color2: Color) {
	const c1 = parseStrToRgb(color1);
	const c2 = parseStrToRgb(color2);

	return Math.sqrt(
		(c2.r - c1.r) ** 2 + (c2.g - c1.g) ** 2 + (c2.b - c1.b) ** 2,
	);
}
