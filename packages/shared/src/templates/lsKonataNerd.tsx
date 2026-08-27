import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataNerd: Template = {
    name: "lsKonataNerd",
    displayName: buildLocales("Nerd Konata", {
        [Locale.Russian]: "Коната-ботаник",
        [Locale.Ukrainian]: "Коната-ботанік",
        [Locale.Dutch]: "Nerd Konata",
        [Locale.French]: "Konata intello",
        [Locale.German]: "Nerd Konata",
        [Locale.Polish]: "Kujonka Konata",
        [Locale.SpanishES]: "Konata empollona",
        [Locale.SpanishLATAM]: "Konata nerd",
        [Locale.PortugueseBR]: "Konata nerd",
        [Locale.Turkish]: "İnek Konata",
        [Locale.Italian]: "Konata secchiona",
        [Locale.Indonesian]: "Konata si kutu buku",
        [Locale.Czech]: "Šprtka Konata",
        [Locale.Japanese]: "オタクなこなた",
        [Locale.Korean]: "너드 코나타",
        [Locale.ChineseCN]: "书呆子此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 630,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataNerd.gif"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
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
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
