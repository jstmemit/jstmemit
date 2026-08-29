import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sleepyThinking: Template = {
    name: "sleepyThinking",
    displayName: buildLocales("Sleepy thinking", {
        [Locale.Russian]: "Сонные мысли",
        [Locale.Ukrainian]: "Сонні думки",
        [Locale.Dutch]: "Slaperig nadenken",
        [Locale.French]: "Pensée endormie",
        [Locale.German]: "Schläfrig nachdenken",
        [Locale.Polish]: "Senny i zamyślony",
        [Locale.SpanishES]: "Pensando con sueño",
        [Locale.SpanishLATAM]: "Pensando con sueño",
        [Locale.PortugueseBR]: "Pensando com sono",
        [Locale.Turkish]: "Uykulu düşünme",
        [Locale.Italian]: "Pensiero assonnato",
        [Locale.Indonesian]: "Mengantuk sambil berpikir",
        [Locale.Czech]: "Ospalé přemýšlení",
        [Locale.Japanese]: "眠そうに考える",
        [Locale.Korean]: "졸면서 생각하기",
        [Locale.ChineseCN]: "困倦思考",
    }),
    topics: [Topic.Misc],
    types: [Type.TextBottom, Type.ObjectImage],
    width: 885,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "dream thumbnail" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src={images[0]}
                width={590}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 320,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sleepythinking.png"
                width={885}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
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
