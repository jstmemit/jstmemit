import { emojiRegex } from "#/regex/emojiRegex.ts";

export const fontSize = (text: string = ""): string => {
    text = text.replaceAll(emojiRegex, "##");

    const len: number = Math.max(1, text.length);
    const size: number = Math.max(6, 11 - Math.sqrt(len));
    return `${size.toFixed(1)}vw`;
};
