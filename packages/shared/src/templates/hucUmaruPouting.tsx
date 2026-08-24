import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruPouting: Template = {
    name: "hucUmaruPouting",
    displayName: buildLocales("Pouting Umaru", {
        [Locale.Russian]: "Надутая Умару",
        [Locale.Ukrainian]: "Надута Умару",
        [Locale.Dutch]: "Pruilende Umaru",
        [Locale.French]: "Umaru qui boude",
        [Locale.German]: "Schmollende Umaru",
        [Locale.Polish]: "Nadąsana Umaru",
        [Locale.SpanishES]: "Umaru haciendo puchero",
        [Locale.SpanishLATAM]: "Umaru haciendo puchero",
        [Locale.PortugueseBR]: "Umaru fazendo bico",
        [Locale.Turkish]: "Dudak büken Umaru",
        [Locale.Italian]: "Umaru imbronciata",
        [Locale.Indonesian]: "Umaru cemberut",
        [Locale.Czech]: "Trucující Umaru",
        [Locale.Japanese]: "拗ねるうまる",
        [Locale.Korean]: "뾰로통한 우마루",
        [Locale.ChineseCN]: "嘟嘴的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 2890,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruPouting.gif"
                width={500}
                height={281}
                style={{ position: "absolute", top: 0, left: 0 }}
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
