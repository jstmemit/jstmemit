export const interpolateString = (string: string, variables: Record<string, string>): string => {
    return string.replace(/\{\{(\w+)}}/g, (match: string, key: string): string => {
        return variables[key] ?? match;
    });
};
