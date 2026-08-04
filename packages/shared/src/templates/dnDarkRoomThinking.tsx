import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dnDarkRoomThinking: Template = {
    name: "dnDarkRoomThinking",
    displayName: buildLocales("Dark room thinking", {
        [Locale.Russian]: "Раздумья в тёмной комнате",
        [Locale.Ukrainian]: "Роздуми в темній кімнаті",
        [Locale.Dutch]: "Nadenken in donkere kamer",
        [Locale.French]: "Réflexion dans une pièce sombre",
        [Locale.German]: "Nachdenken im dunklen Zimmer",
        [Locale.Polish]: "Rozmyślanie w ciemnym pokoju",
        [Locale.SpanishES]: "Pensando en un cuarto oscuro",
        [Locale.SpanishLATAM]: "Pensando en un cuarto oscuro",
        [Locale.PortugueseBR]: "Pensando em um quarto escuro",
        [Locale.Turkish]: "Karanlık odada düşünmek",
        [Locale.Italian]: "Riflettere in una stanza buia",
        [Locale.Indonesian]: "Berpikir di ruangan gelap",
        [Locale.Czech]: "Přemýšlení v temné místnosti",
        [Locale.Japanese]: "暗い部屋で考え込む",
        [Locale.Korean]: "어두운 방에서 생각에 잠김",
        [Locale.ChineseCN]: "黑暗房间沉思",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DeathNote],
    types: [Type.TextTopWithBackground],
    width: 640,
    height: 750,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dnDarkRoomThinking.png"
                width={640}
                height={640}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        fontSize: 40,
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
