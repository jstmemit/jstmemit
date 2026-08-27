import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenBlowingKissToFlamme: Template = {
    name: "frierenBlowingKissToFlamme",
    displayName: buildLocales("Frieren blowing kiss to Flamme", {
        [Locale.Russian]: "Фрирен посылает воздушный поцелуй Фламме",
        [Locale.Ukrainian]: "Фрірен посилає повітряний поцілунок Фламме",
        [Locale.Dutch]: "Frieren blaast een kus naar Flamme",
        [Locale.French]: "Frieren envoie un baiser à Flamme",
        [Locale.German]: "Frieren wirft Flamme einen Kuss zu",
        [Locale.Polish]: "Frieren przesyła całusa Flamme",
        [Locale.SpanishES]: "Frieren lanzando un beso a Flamme",
        [Locale.SpanishLATAM]: "Frieren lanzando un beso a Flamme",
        [Locale.PortugueseBR]: "Frieren mandando beijo para Flamme",
        [Locale.Turkish]: "Frieren Flamme'ye öpücük gönderiyor",
        [Locale.Italian]: "Frieren manda un bacio a Flamme",
        [Locale.Indonesian]: "Frieren meniup ciuman untuk Flamme",
        [Locale.Czech]: "Frieren posílá pusu Flamme",
        [Locale.Japanese]: "フランメに投げキッスをするフリーレン",
        [Locale.Korean]: "플람메에게 손키스 날리는 프리렌",
        [Locale.ChineseCN]: "芙莉莲对弗兰梅飞吻",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.FaceImage, Type.DefaultText],
    width: 1200,
    height: 1700,
    texts: [],
    images: [
        { id: 0, description: "Frieren's face" },
        { id: 1, description: "Flamme's face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenBlowingKissToFlamme.png"
                width={1200}
                height={1700}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: 80,
                    left: 470,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    bottom: 600,
                    right: 340,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
