import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acsrMisakaRailgun: Template = {
    name: "acsrMisakaRailgun",
    displayName: buildLocales("Misaka railgun", {
        [Locale.Russian]: "Рейлган Мисаки",
        [Locale.Ukrainian]: "Рейлган Місаки",
        [Locale.Dutch]: "Misaka railgun",
        [Locale.French]: "Railgun de Misaka",
        [Locale.German]: "Misaka Railgun",
        [Locale.Polish]: "Railgun Misaki",
        [Locale.SpanishES]: "Railgun de Misaka",
        [Locale.SpanishLATAM]: "Railgun de Misaka",
        [Locale.PortugueseBR]: "Railgun da Misaka",
        [Locale.Turkish]: "Misaka railgun",
        [Locale.Italian]: "Railgun di Misaka",
        [Locale.Indonesian]: "Railgun Misaka",
        [Locale.Czech]: "Misaka railgun",
        [Locale.Japanese]: "御坂の超電磁砲",
        [Locale.Korean]: "미사카 레일건",
        [Locale.ChineseCN]: "御坂超电磁炮",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ACertainScientificRailgun],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 5480,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/acsrMisakaRailgun.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
