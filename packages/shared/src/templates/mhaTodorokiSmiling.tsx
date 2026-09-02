import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaTodorokiSmiling: Template = {
    name: "mhaTodorokiSmiling",
    displayName: buildLocales("Todoroki smiling", {
        [Locale.Russian]: "Тодороки улыбается",
        [Locale.Ukrainian]: "Тодорокі посміхається",
        [Locale.Dutch]: "Glimlachende Todoroki",
        [Locale.French]: "Todoroki souriant",
        [Locale.German]: "Lächelnder Todoroki",
        [Locale.Polish]: "Uśmiechający się Todoroki",
        [Locale.SpanishES]: "Todoroki sonriendo",
        [Locale.SpanishLATAM]: "Todoroki sonriendo",
        [Locale.PortugueseBR]: "Todoroki sorrindo",
        [Locale.Turkish]: "Gülümseyen Todoroki",
        [Locale.Italian]: "Todoroki che sorride",
        [Locale.Indonesian]: "Todoroki tersenyum",
        [Locale.Czech]: "Usmívající se Todoroki",
        [Locale.Japanese]: "微笑む轟",
        [Locale.Korean]: "미소 짓는 토도로키",
        [Locale.ChineseCN]: "微笑的轰",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 380,
    animationDuration: 3200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaTodorokiSmiling.gif"
                width={540}
                height={280}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
