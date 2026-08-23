import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaHayasakaUnimpressed: Template = {
    name: "kaguyasamaHayasakaUnimpressed",
    displayName: buildLocales("Unimpressed Hayasaka", {
        [Locale.Russian]: "Хаясака не впечатлена",
        [Locale.Ukrainian]: "Хаясака не вражена",
        [Locale.Dutch]: "Onverschillige Hayasaka",
        [Locale.French]: "Hayasaka blasée",
        [Locale.German]: "Unbeeindruckte Hayasaka",
        [Locale.Polish]: "Obojętna Hayasaka",
        [Locale.SpanishES]: "Hayasaka indiferente",
        [Locale.SpanishLATAM]: "Hayasaka indiferente",
        [Locale.PortugueseBR]: "Hayasaka indiferente",
        [Locale.Turkish]: "Etkilenmemiş Hayasaka",
        [Locale.Italian]: "Hayasaka indifferente",
        [Locale.Indonesian]: "Hayasaka tidak terkesan",
        [Locale.Czech]: "Neohromená Hayasaka",
        [Locale.Japanese]: "呆れる早坂",
        [Locale.Korean]: "한심하게 보는 하야사카",
        [Locale.ChineseCN]: "无语的早坂",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottom, Type.Animated],
    width: 544,
    height: 640,
    animationDuration: 2110,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaHayasakaUnimpressed.gif"
                width={544}
                height={640}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
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
