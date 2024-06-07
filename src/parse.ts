import { Color, RGBColorObject } from "./";

function parseHex(str: string) {
	return parseInt(str, 16);
}

function parseHexIntoRgb(color: string): RGBColorObject {
	const preproccessedColor = color.startsWith("#") ? color.slice(1) : color;

	if (preproccessedColor.length === 3) {
		const [r, g, b] = preproccessedColor.split("").map(parseHex) as [
			number,
			number,
			number,
		];

		return {
			r,
			g,
			b,
		};
	}

	if (preproccessedColor.length === 6) {
		return {
			r: parseHex(preproccessedColor.slice(0, 2)),
			g: parseHex(preproccessedColor.slice(2, 4)),
			b: parseHex(preproccessedColor.slice(4, 6)),
		};
	}

	throw new Error("Invalid hex color string");
}

export function parseStrToRgb(color: Color): RGBColorObject {
	if (typeof color === "string") {
		return parseHexIntoRgb(color);
	}

	if (Array.isArray(color)) {
		return {
			r: color[0],
			g: color[1],
			b: color[2],
		};
	}

	return { ...color };
}
