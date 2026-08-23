import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaHoldingLeek: Template = {
    name: "toradoraTaigaHoldingLeek",
    displayName: buildLocales("Taiga holding leek", {
        [Locale.Russian]: "Тайга держит лук-порей",
        [Locale.Ukrainian]: "Тайга тримає цибулю-порей",
        [Locale.Dutch]: "Taiga houdt prei vast",
        [Locale.French]: "Taiga tenant un poireau",
        [Locale.German]: "Taiga hält Lauch",
        [Locale.Polish]: "Taiga trzymająca por",
        [Locale.SpanishES]: "Taiga sosteniendo un puerro",
        [Locale.SpanishLATAM]: "Taiga sosteniendo un puerro",
        [Locale.PortugueseBR]: "Taiga segurando alho-poró",
        [Locale.Turkish]: "Pırasa tutan Taiga",
        [Locale.Italian]: "Taiga con in mano un porro",
        [Locale.Indonesian]: "Taiga memegang daun bawang",
        [Locale.Czech]: "Taiga drží pórek",
        [Locale.Japanese]: "ネギを持つ大河",
        [Locale.Korean]: "대파를 든 타이가",
        [Locale.ChineseCN]: "大河拿着大葱",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.DefaultText, Type.FaceImage],
    width: 519,
    height: 385,
    texts: [],
    images: [{ id: 0, description: "Taiga`s face" }],
    element: ({ images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaHoldingLeek.png"
                width={519}
                height={385}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
        </div>
    ),
};
