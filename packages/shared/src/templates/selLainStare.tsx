import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainStare: Template = {
    name: "selLainStare",
    displayName: buildLocales("Lain stare", {
        [Locale.Russian]: "Взгляд Лэйн",
        [Locale.Ukrainian]: "Погляд Лейн",
        [Locale.Dutch]: "Lain staart",
        [Locale.French]: "Lain regarde fixement",
        [Locale.German]: "Lain starrt",
        [Locale.Polish]: "Spojrzenie Lain",
        [Locale.SpanishES]: "Lain mirando fijamente",
        [Locale.SpanishLATAM]: "Lain mirando fijamente",
        [Locale.PortugueseBR]: "Lain encarando",
        [Locale.Turkish]: "Lain bakışı",
        [Locale.Italian]: "Lain che fissa",
        [Locale.Indonesian]: "Lain menatap",
        [Locale.Czech]: "Lain zírá",
        [Locale.Japanese]: "見つめる玲音",
        [Locale.Korean]: "레인 응시",
        [Locale.ChineseCN]: "玲音凝视",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.TextBottom],
    width: 500,
    height: 500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/selLainStare.png"
                width={500}
                height={500}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
