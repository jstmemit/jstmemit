import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaCatchesRyuujiAndAmi: Template = {
    name: "toradoraTaigaCatchesRyuujiAndAmi",
    displayName: buildLocales("Taiga catches Ryuuji and Ami", {
        [Locale.Russian]: "Тайга застукала Рюджи и Ами",
        [Locale.Ukrainian]: "Тайга застукала Рюдзі та Амі",
        [Locale.Dutch]: "Taiga betrapt Ryuuji en Ami",
        [Locale.French]: "Taiga surprend Ryuuji et Ami",
        [Locale.German]: "Taiga erwischt Ryuuji und Ami",
        [Locale.Polish]: "Taiga przyłapuje Ryuujiego i Ami",
        [Locale.SpanishES]: "Taiga atrapa a Ryuuji y Ami",
        [Locale.SpanishLATAM]: "Taiga atrapa a Ryuuji y Ami",
        [Locale.PortugueseBR]: "Taiga pega Ryuuji e Ami",
        [Locale.Turkish]: "Taiga, Ryuuji ve Ami'yi yakalar",
        [Locale.Italian]: "Taiga sorprende Ryuuji e Ami",
        [Locale.Indonesian]: "Taiga memergoki Ryuuji dan Ami",
        [Locale.Czech]: "Taiga přistihne Ryuujiho a Ami",
        [Locale.Japanese]: "竜児と亜美を捕まえる大河",
        [Locale.Korean]: "류지와 아미를 잡는 타이가",
        [Locale.ChineseCN]: "大河抓住龙儿和亚美",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.FaceImage],
    width: 870,
    height: 964,
    texts: [],
    images: [
        { id: 0, description: "Ryuuji`s face" },
        { id: 1, description: "Ami`s face" },
        { id: 2, description: "Taiga`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaCatchesRyuujiAndAmi.png"
                width={870}
                height={964}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 230,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[1]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: 110,
                    right: 400,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[2]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: 200,
                    right: 330,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
