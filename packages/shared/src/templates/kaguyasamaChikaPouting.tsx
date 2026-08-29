import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaChikaPouting: Template = {
    name: "kaguyasamaChikaPouting",
    displayName: buildLocales("Pouting Chika", {
        [Locale.Russian]: "Чика дуется",
        [Locale.Ukrainian]: "Чіка дметься",
        [Locale.Dutch]: "Pruilende Chika",
        [Locale.French]: "Chika qui boude",
        [Locale.German]: "Schmollende Chika",
        [Locale.Polish]: "Dąsająca się Chika",
        [Locale.SpanishES]: "Chika haciendo pucheros",
        [Locale.SpanishLATAM]: "Chika haciendo pucheros",
        [Locale.PortugueseBR]: "Chika fazendo bico",
        [Locale.Turkish]: "Dudak büken Chika",
        [Locale.Italian]: "Chika imbronciata",
        [Locale.Indonesian]: "Chika merajuk",
        [Locale.Czech]: "Trucující Chika",
        [Locale.Japanese]: "拗ねるチカ",
        [Locale.Korean]: "삐진 치카",
        [Locale.ChineseCN]: "嘟嘴的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 1080,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaPouting.gif"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
