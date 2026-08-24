import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acsrMisakaAtack: Template = {
    name: "acsrMisakaAtack",
    displayName: buildLocales("Misaka attack", {
        [Locale.Russian]: "Атака Мисаки",
        [Locale.Ukrainian]: "Атака Місаки",
        [Locale.Dutch]: "Misaka aanval",
        [Locale.French]: "Attaque de Misaka",
        [Locale.German]: "Misakas Angriff",
        [Locale.Polish]: "Atak Misaki",
        [Locale.SpanishES]: "Ataque de Misaka",
        [Locale.SpanishLATAM]: "Ataque de Misaka",
        [Locale.PortugueseBR]: "Ataque da Misaka",
        [Locale.Turkish]: "Misaka saldırısı",
        [Locale.Italian]: "Attacco di Misaka",
        [Locale.Indonesian]: "Serangan Misaka",
        [Locale.Czech]: "Útok Misaky",
        [Locale.Japanese]: "御坂の攻撃",
        [Locale.Korean]: "미사카 공격",
        [Locale.ChineseCN]: "御坂攻击",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ACertainScientificRailgun],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 2790,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/acsrMisakaAtack.gif"
                width={480}
                height={270}
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
