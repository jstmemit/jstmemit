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
    "https://wideunits.nl/cdn-cgi/image/f=webp,q=30,onerror=redirect,metadata=none/https://files.wideunits.nl/memes/examples/fbi.gif",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/city.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/markrutte.jpeg",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/chicken.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/lightning.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/battlefield.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/hamster.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/siege.jpg",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/ubisoft.jpg",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/applestore.jpg",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/linus.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/cat.png",
    "https://jstmemit.com/cdn-cgi/image/f=avif,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=30,slow-connection-quality=22,width=768/https://files.wideunits.nl/memes/examples/rust.jpg",
];

export const variants: TemplateProps[] = _.times(12, () => ({
    texts: _.shuffle(texts),
    images: _.shuffle(images),
}));
