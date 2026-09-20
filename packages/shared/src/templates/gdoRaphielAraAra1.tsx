import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoRaphielAraAra1: Template = {
    name: "gdoRaphielAraAra1",
    displayName: buildLocales("Raphiel Ara Ara 1", {
        [Locale.Russian]: "Рафиэль Ара-ара 1",
        [Locale.Ukrainian]: "Рафіель Ара-ара 1",
        [Locale.Dutch]: "Raphiel Ara Ara 1",
        [Locale.French]: "Raphiel Ara Ara 1",
        [Locale.German]: "Raphiel Ara Ara 1",
        [Locale.Polish]: "Raphiel Ara Ara 1",
        [Locale.SpanishES]: "Raphiel Ara Ara 1",
        [Locale.SpanishLATAM]: "Raphiel Ara Ara 1",
        [Locale.PortugueseBR]: "Raphiel Ara Ara 1",
        [Locale.Turkish]: "Raphiel Ara Ara 1",
        [Locale.Italian]: "Raphiel Ara Ara 1",
        [Locale.Indonesian]: "Raphiel Ara Ara 1",
        [Locale.Czech]: "Raphiel Ara Ara 1",
        [Locale.Japanese]: "ラフィエル あらあら 1",
        [Locale.Korean]: "라피엘 아라아라 1",
        [Locale.ChineseCN]: "拉斐尔 啊啦啊啦 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoRaphielAraAra1.png"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
