import { image, text } from "@takumi-rs/helpers";
import type { ImageSource, Node } from "takumi-js";

const emojiRegex: RegExp = /<a?:\w{2,32}:(\d{17,20})>/g;

export const extractDiscordEmojis = function (node: Node, width: number): Node {
    if (node.type !== "container" || !node.children) return node;

    node.children = node.children.flatMap((child: Node): Node[] => {
        if (child.type !== "text" || !emojiRegex.test(child.text)) return [extractDiscordEmojis(child, width)];

        return child.text.split(new RegExp(emojiRegex, "g")).flatMap((part: string, index: number): Node[] =>
            index % 2
                ? [
                      image({
                          src: `https://cdn.discordapp.com/emojis/${part}.webp?size=128`,
                          width: width / 12.5,
                          height: width / 12.5,
                      }),
                  ]
                : part.split(/(?<=\s)/).map((word: string): Node => text(word, child.style)),
        );
    });

    return node;
};
