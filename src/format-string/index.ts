/**
 * Formats the template string by passed object.
 * @example
 *   formatString("Hello {{name}}", { name: "Alex" }) //=> "Hello Alex"
 */
export function formatString(
    template: string,
    source: Record<string, string>,
): string {
    for (const [key, value] of Object.entries(source)) {
        const reg = new RegExp(`{{${key}}}`, "g");
        template = template.replace(reg, value);
    }
    return template;
}
