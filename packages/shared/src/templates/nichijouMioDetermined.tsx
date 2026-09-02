import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouMioDetermined: Template = {
    name: "nichijouMioDetermined",
    displayName: buildLocales("Mio determined", {
        [Locale.Russian]: "Решительная Мио",
        [Locale.Ukrainian]: "Рішуча Міо",
        [Locale.Dutch]: "Vastberaden Mio",
        [Locale.French]: "Mio déterminée",
        [Locale.German]: "Entschlossene Mio",
        [Locale.Polish]: "Zdeterminowana Mio",
        [Locale.SpanishES]: "Mio decidida",
        [Locale.SpanishLATAM]: "Mio decidida",
        [Locale.PortugueseBR]: "Mio determinada",
        [Locale.Turkish]: "Kararlı Mio",
        [Locale.Italian]: "Mio determinata",
        [Locale.Indonesian]: "Mio bertekad",
        [Locale.Czech]: "Odhodlaná Mio",
        [Locale.Japanese]: "決意するみお",
        [Locale.Korean]: "결의에 찬 미오",
        [Locale.ChineseCN]: "下定决心的美绪",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 600,
    animationDuration: 1700,
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
                    width: "100%",
                    height: "100px",
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
