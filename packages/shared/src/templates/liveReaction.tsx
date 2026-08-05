import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const liveReaction: Template = {
    name: "liveReaction",
    displayName: buildLocales("Live reaction", {
        [Locale.Russian]: "Реакция в прямом эфире",
        [Locale.Ukrainian]: "Реакція в прямому ефірі",
        [Locale.Dutch]: "Live reactie",
        [Locale.French]: "Réaction en direct",
        [Locale.German]: "Live-Reaktion",
        [Locale.Polish]: "Reakcja na żywo",
        [Locale.SpanishES]: "Reacción en vivo",
        [Locale.SpanishLATAM]: "Reacción en vivo",
        [Locale.PortugueseBR]: "Reação ao vivo",
        [Locale.Turkish]: "Canlı tepki",
        [Locale.Italian]: "Reazione dal vivo",
        [Locale.Indonesian]: "Reaksi langsung",
        [Locale.Czech]: "Živá reakce",
        [Locale.Japanese]: "ライブリアクション",
        [Locale.Korean]: "실시간 반응",
        [Locale.ChineseCN]: "实时反应",
    }),
    topics: [Topic.Reaction],
    types: [Type.DefaultText, Type.FaceImage, Type.ObjectImage],
    width: 800,
    height: 800,
    texts: [],
    images: [
        { id: 0, description: "content to react to" },
        { id: 1, description: "person who reacts" },
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
            <img src={images[0]} width={768} height={615} style={{ position: "absolute", top: 185, left: 17 }} />
            <img
                src={
                    "https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/livereaction.png"
                }
                width={800}
                height={800}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[1]}
                width={110}
                height={110}
                style={{
                    position: "absolute",
                    top: 35,
                    left: 212,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
