export function objectEntries<K extends string, V>(obj: Record<K, V>) {
	const keys = Object.keys(obj) as K[];

	return keys.map((k) => [k, obj[k] as V] as const);
}
