import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const bumperSticker: Template = {
    name: "bumperSticker",
    displayName: buildLocales("Bumper sticker", {
        [Locale.Russian]: "Наклейка на бампер",
        [Locale.Ukrainian]: "Наклейка на бампер",
        [Locale.Dutch]: "Bumpersticker",
        [Locale.French]: "Autocollant de pare-chocs",
        [Locale.German]: "Stoßstangenaufkleber",
        [Locale.Polish]: "Naklejka na zderzak",
        [Locale.SpanishES]: "Pegatina de parachoques",
        [Locale.SpanishLATAM]: "Calcomanía de parachoques",
        [Locale.PortugueseBR]: "Adesivo de para-choque",
        [Locale.Turkish]: "Tampon çıkartması",
        [Locale.Italian]: "Adesivo per paraurti",
        [Locale.Indonesian]: "Stiker bumper",
        [Locale.Czech]: "Nálepka na nárazník",
        [Locale.Japanese]: "バンパーステッカー",
        [Locale.Korean]: "범퍼 스티커",
        [Locale.ChineseCN]: "保险杠贴纸",
    }),
    topics: [Topic.SocialPost],
    types: [Type.AvatarImage, Type.ObjectImage, Type.TextPost],
    width: 814,
    height: 691,
    texts: [],
    images: [
        { id: 0, description: "Bumper sticker" },
        { id: 1, description: "Profile picture of the guy who wants the bumper sticker" },
    ],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 15,
                    left: 10,
                    borderRadius: 24,
                }}
            />
            <img
                src={images[0]}
                width={480}
                height={250}
                style={{
                    position: "absolute",
                    top: 400,
                    left: 190,
                    transform: "rotate(3deg)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bumperSticker.png"
                width={814}
                height={691}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
