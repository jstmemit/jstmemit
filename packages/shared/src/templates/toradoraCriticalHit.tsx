import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraCriticalHit: Template = {
    name: "toradoraCriticalHit",
    displayName: buildLocales("Critical hit", {
        [Locale.Russian]: "Критический удар",
        [Locale.Ukrainian]: "Критичний удар",
        [Locale.Dutch]: "Kritieke treffer",
        [Locale.French]: "Coup critique",
        [Locale.German]: "Kritischer Treffer",
        [Locale.Polish]: "Trafienie krytyczne",
        [Locale.SpanishES]: "Golpe crítico",
        [Locale.SpanishLATAM]: "Golpe crítico",
        [Locale.PortugueseBR]: "Acerto crítico",
        [Locale.Turkish]: "Kritik vuruş",
        [Locale.Italian]: "Colpo critico",
        [Locale.Indonesian]: "Serangan kritis",
        [Locale.Czech]: "Kritický zásah",
        [Locale.Japanese]: "クリティカルヒット",
        [Locale.Korean]: "치명타",
        [Locale.ChineseCN]: "暴击",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora, Topic.Demotivator],
    types: [Type.DefaultText, Type.FaceImage],
    width: 500,
    height: 400,
    texts: [],
    images: [
        { id: 0, description: "Ryuuji`s face" },
        { id: 1, description: "Taiga`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraCriticalHit.png"
                width={500}
                height={400}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: 40,
                    left: 120,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
            <img
                src={images[1]}
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    top: 125,
                    right: 100,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(50deg)",
                }}
            />
        </div>
    ),
};
