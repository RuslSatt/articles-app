export type ClassNamesMods = Record<string, boolean | string>;

/**
 * Generates a CSS class string based on the provided parameters.
 *
 * @param {string} className - The base class name.
 * @param {string[]} [additional] - Additional class names to include.
 * @param {ClassNamesMods} [mods] - Modifiers to conditionally include in the class string.
 * @return {string} The generated CSS class string.
 */

export function classNames(
    className: string,
    additional: string[] = [],
    mods: ClassNamesMods = {}
): string {
    return [className, ...additional, ...Object.keys(mods).filter((key) => mods[key])].join(' ');
}
