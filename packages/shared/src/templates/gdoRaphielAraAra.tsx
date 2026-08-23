import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoRaphielAraAra: Template = {
    name: "gdoRaphielAraAra",
    displayName: buildLocales("Raphiel Ara Ara", {
        [Locale.Russian]: "Рафиэль Ара-ара",
        [Locale.Ukrainian]: "Рафіель Ара-ара",
        [Locale.Dutch]: "Raphiel Ara Ara",
        [Locale.French]: "Raphiel Ara Ara",
        [Locale.German]: "Raphiel Ara Ara",
        [Locale.Polish]: "Raphiel Ara Ara",
        [Locale.SpanishES]: "Raphiel Ara Ara",
        [Locale.SpanishLATAM]: "Raphiel Ara Ara",
        [Locale.PortugueseBR]: "Raphiel Ara Ara",
        [Locale.Turkish]: "Raphiel Ara Ara",
        [Locale.Italian]: "Raphiel Ara Ara",
        [Locale.Indonesian]: "Raphiel Ara Ara",
        [Locale.Czech]: "Raphiel Ara Ara",
        [Locale.Japanese]: "ラフィエル あらあら",
        [Locale.Korean]: "라피엘 아라아라",
        [Locale.ChineseCN]: "拉斐尔 啊啦啊啦",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoRaphielAraAra.gif"
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
                        fontSize: 30,
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
