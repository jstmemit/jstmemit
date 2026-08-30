const emojiRegex: RegExp = /<a?:\w{2,32}:(\d{17,20})>/g;

export const fontSize = (text: string = ""): string => {
    text = text.replaceAll(emojiRegex, "1");

    const len: number = Math.max(1, text.length);
    const size: number = Math.max(6, 11 - Math.sqrt(len));
    return `${size.toFixed(1)}vw`;
};
