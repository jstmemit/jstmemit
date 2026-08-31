import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouSakamotoMesmerized: Template = {
    name: "nichijouSakamotoMesmerized",
    displayName: buildLocales("Sakamoto mesmerized", {
        [Locale.Russian]: "Завороженный Сакамото",
        [Locale.Ukrainian]: "Заворожений Сакамото",
        [Locale.Dutch]: "Gefascineerde Sakamoto",
        [Locale.French]: "Sakamoto fasciné",
        [Locale.German]: "Faszinierter Sakamoto",
        [Locale.Polish]: "Zafascynowany Sakamoto",
        [Locale.SpanishES]: "Sakamoto hipnotizado",
        [Locale.SpanishLATAM]: "Sakamoto hipnotizado",
        [Locale.PortugueseBR]: "Sakamoto hipnotizado",
        [Locale.Turkish]: "Büyülenmiş Sakamoto",
        [Locale.Italian]: "Sakamoto ipnotizzato",
        [Locale.Indonesian]: "Sakamoto terpesona",
        [Locale.Czech]: "Uchvácený Sakamoto",
        [Locale.Japanese]: "魅了された阪本",
        [Locale.Korean]: "매료된 사카모토",
        [Locale.ChineseCN]: "着迷的阪本",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 437,
    height: 334,
    animationDuration: 2720,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouSakamotoMesmerized.webp"
                width={437}
                height={244}
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
