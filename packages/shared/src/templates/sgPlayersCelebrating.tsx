import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sgPlayersCelebrating: Template = {
    name: "sgPlayersCelebrating",
    displayName: buildLocales("Players celebrating", {
        [Locale.Russian]: "Празднующие игроки",
        [Locale.Ukrainian]: "Гравці святкують",
        [Locale.Dutch]: "Vierende spelers",
        [Locale.French]: "Joueurs célébrant",
        [Locale.German]: "Feiernde Spieler",
        [Locale.Polish]: "Świętujący gracze",
        [Locale.SpanishES]: "Jugadores celebrando",
        [Locale.SpanishLATAM]: "Jugadores celebrando",
        [Locale.PortugueseBR]: "Jogadores comemorando",
        [Locale.Turkish]: "Kutlama yapan oyuncular",
        [Locale.Italian]: "Giocatori che festeggiano",
        [Locale.Indonesian]: "Pemain merayakan",
        [Locale.Czech]: "Slavící hráči",
        [Locale.Japanese]: "喜ぶプレイヤーたち",
        [Locale.Korean]: "환호하는 참가자들",
        [Locale.ChineseCN]: "庆祝的玩家们",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.SquidGame],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 1800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sgPlayersCelebrating.gif"
                width={498}
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
