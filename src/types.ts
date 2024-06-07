/**
 * Represents an RGB color as an object with individual components.
 */
export type RGBColorObject = {
	/** The red component of the RGB color, ranging from 0 to 255. */
	r: number;
	/** The green component of the RGB color, ranging from 0 to 255. */
	g: number;
	/** The blue component of the RGB color, ranging from 0 to 255. */
	b: number;
};

/**
 * Represents an RGB color as an array containing individual components.
 */
export type RGBColorArray = [number, number, number];

/**
 * Represents a color that can be specified as an RGB color object, RGB color array, or a hex color string.
 */
export type Color = RGBColorObject | RGBColorArray | string;
