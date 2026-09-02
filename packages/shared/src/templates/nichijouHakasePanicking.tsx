import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouHakasePanicking: Template = {
    name: "nichijouHakasePanicking",
    displayName: buildLocales("Hakase panicking", {
        [Locale.Russian]: "Хакасэ паникует",
        [Locale.Ukrainian]: "Хакасе панікує",
        [Locale.Dutch]: "Hakase in paniek",
        [Locale.French]: "Hakase paniquant",
        [Locale.German]: "Panische Hakase",
        [Locale.Polish]: "Panikująca Hakase",
        [Locale.SpanishES]: "Hakase en pánico",
        [Locale.SpanishLATAM]: "Hakase en pánico",
        [Locale.PortugueseBR]: "Hakase em pânico",
        [Locale.Turkish]: "Panikleyen Hakase",
        [Locale.Italian]: "Hakase nel panico",
        [Locale.Indonesian]: "Hakase panik",
        [Locale.Czech]: "Panikařící Hakase",
        [Locale.Japanese]: "パニックになるはかせ",
        [Locale.Korean]: "패닉에 빠진 하카세",
        [Locale.ChineseCN]: "惊慌失措的博士",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 429,
    height: 378,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouHakasePanicking.gif"
                width={429}
                height={298}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "80px",
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
