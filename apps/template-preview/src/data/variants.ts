import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import _ from "lodash";

// test data for meme template previews

const texts: string[] = [
    "Cities Skylines 2",
    "without bicycles",
    "KFC",
    "at 23:59",
    "Game of the year",
    "Sony Headquarters",
    "LinusTechTips",
    "is not coming here",
    "meow",
    "aaaaaaaa",
    "Bot settings",
    "Mark Rutte",
    "r/LinusTechTips",
    "hop on war thunder",
    "yes",
    "why",
    "lol",
    "پیام آزمایشی",
    "тестовое сообщение",
];
const images: string[] = [
    "https://files.wideunits.nl/memes/examples/city.png",
    "https://files.wideunits.nl/memes/examples/markrutte.jpeg",
    "https://files.wideunits.nl/memes/examples/chicken.png",
    "https://files.wideunits.nl/memes/examples/lightning.png",
    "https://files.wideunits.nl/memes/examples/battlefield.png",
    "https://files.wideunits.nl/memes/examples/hamster.png",
    "https://files.wideunits.nl/memes/examples/siege.jpg",
    "https://files.wideunits.nl/memes/examples/ubisoft.jpg",
    "https://files.wideunits.nl/memes/examples/applestore.jpg",
    "https://files.wideunits.nl/memes/examples/linus.png",
    "https://files.wideunits.nl/memes/examples/cat.png",
    "https://files.wideunits.nl/memes/examples/rust.jpg",
];

export const variants: TemplateProps[] = _.times(12, () => ({
    texts: _.shuffle(texts),
    images: _.shuffle(images),
}));
