import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lsKonataGaming: Template = {
    name: "lsKonataGaming",
    displayName: buildLocales("Konata playing games", {
        [Locale.Russian]: "Играющая Коната",
        [Locale.Ukrainian]: "Коната грає в ігри",
        [Locale.Dutch]: "Gamende Konata",
        [Locale.French]: "Konata jouant aux jeux vidéo",
        [Locale.German]: "Zockende Konata",
        [Locale.Polish]: "Grająca Konata",
        [Locale.SpanishES]: "Konata jugando videojuegos",
        [Locale.SpanishLATAM]: "Konata jugando videojuegos",
        [Locale.PortugueseBR]: "Konata jogando videogame",
        [Locale.Turkish]: "Oyun oynayan Konata",
        [Locale.Italian]: "Konata che gioca",
        [Locale.Indonesian]: "Konata bermain game",
        [Locale.Czech]: "Hrající Konata",
        [Locale.Japanese]: "ゲームをするこなた",
        [Locale.Korean]: "게임하는 코나타",
        [Locale.ChineseCN]: "打游戏的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1000,
    height: 500,
    animationDuration: 1700,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataGaming.gif"
                width={500}
                height={500}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 70,
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
