import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaMorningMisanthropeDemotivator: Template = {
    name: "toradoraTaigaMorningMisanthropeDemotivator",
    displayName: buildLocales("Taiga morning misanthrope demotivator", {
        [Locale.Russian]: "Тайга: утренний мизантроп демотиватор",
        [Locale.Ukrainian]: "Тайга: ранковий мізантроп демотиватор",
        [Locale.Dutch]: "Taiga ochtend misantroop demotivator",
        [Locale.French]: "Démotivateur Taiga misanthrope du matin",
        [Locale.German]: "Taiga Morgen Misanthrop Demotivator",
        [Locale.Polish]: "Demotywator Taiga poranny mizantrop",
        [Locale.SpanishES]: "Desmotivador Taiga misántropo matutino",
        [Locale.SpanishLATAM]: "Desmotivador Taiga misántropo matutino",
        [Locale.PortugueseBR]: "Demotivador Taiga misantropa matinal",
        [Locale.Turkish]: "Taiga sabah mizantrop demotivatörü",
        [Locale.Italian]: "Demotivatore Taiga misantropa mattutina",
        [Locale.Indonesian]: "Demotivator Taiga misantropis pagi",
        [Locale.Czech]: "Demotivátor Taiga ranní misantrop",
        [Locale.Japanese]: "大河 朝の人間嫌い デモティベーター",
        [Locale.Korean]: "타이가 아침 염세주의자 데모티베이터",
        [Locale.ChineseCN]: "大河早晨厌世者负能量图",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora, Topic.Demotivator],
    types: [Type.FaceImage, Type.DefaultText],
    width: 500,
    height: 418,
    texts: [],
    images: [{ id: 0, description: "Taiga`s face" }],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaMorningMisanthropeDemotivator.png"
                width={500}
                height={418}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={140}
                height={140}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 160,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
