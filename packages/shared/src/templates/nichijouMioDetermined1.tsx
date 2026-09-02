import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouMioDetermined1: Template = {
    name: "nichijouMioDetermined1",
    displayName: buildLocales("Mio determined 1", {
        [Locale.Russian]: "Решительная Мио 1",
        [Locale.Ukrainian]: "Рішуча Міо 1",
        [Locale.Dutch]: "Vastberaden Mio 1",
        [Locale.French]: "Mio déterminée 1",
        [Locale.German]: "Entschlossene Mio 1",
        [Locale.Polish]: "Zdeterminowana Mio 1",
        [Locale.SpanishES]: "Mio decidida 1",
        [Locale.SpanishLATAM]: "Mio decidida 1",
        [Locale.PortugueseBR]: "Mio determinada 1",
        [Locale.Turkish]: "Kararlı Mio 1",
        [Locale.Italian]: "Mio determinata 1",
        [Locale.Indonesian]: "Mio bertekad 1",
        [Locale.Czech]: "Odhodlaná Mio 1",
        [Locale.Japanese]: "決意するみお 1",
        [Locale.Korean]: "결의에 찬 미오 1",
        [Locale.ChineseCN]: "下定决心的美绪 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1000,
    height: 500,
    animationDuration: 1700,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouMioDetermined.gif"
                width={500}
                height={500}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
