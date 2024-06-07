import { Color, HTML_COLOR_RECORD, RGBColorObject } from "./";
import { distance } from "./distance";
import { objectEntries } from "./utils";

/**
 * Converts a color object to its corresponding name based on the provided color dictionary.
 * @param color The color object to be converted.
 * @param colors The dictionary containing color names and their corresponding RGB color objects.
 * @returns The name of the closest matching color in the dictionary, or undefined if no match is found.
 */
export function colorToName(
	color: Color,
	colors: Record<string, RGBColorObject> = HTML_COLOR_RECORD,
) {
	const sortedEntries = objectEntries(colors).sort(
		([_, c], [__, c1]) => distance(c, color) - distance(c1, color),
	);

	const match = sortedEntries[0];
	return match ? match[0] : undefined;
}

/**
 * Retrieves the RGB color object corresponding to the provided color name from the color dictionary.
 * @param name The name of the color to retrieve.
 * @param colors The dictionary containing color names and their corresponding RGB color objects.
 * @returns The RGB color object corresponding to the provided color name, or undefined if the name is not found in the dictionary.
 */
export function nameToColor<T extends string>(
	name: T,
	colors: Record<T, RGBColorObject> = HTML_COLOR_RECORD,
) {
	return colors[name];
}
