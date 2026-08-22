import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const evangelionShinjiIkariListeningToMusic: Template = {
    name: "evangelionShinjiIkariListeningToMusic",
    displayName: buildLocales("Shinji Ikari listening to music", {
        [Locale.Russian]: "Синдзи Икари слушает музыку",
        [Locale.Ukrainian]: "Шінджі Ікарі слухає музику",
        [Locale.Dutch]: "Shinji Ikari luistert naar muziek",
        [Locale.French]: "Shinji Ikari écoute de la musique",
        [Locale.German]: "Shinji Ikari hört Musik",
        [Locale.Polish]: "Shinji Ikari słucha muzyki",
        [Locale.SpanishES]: "Shinji Ikari escuchando música",
        [Locale.SpanishLATAM]: "Shinji Ikari escuchando música",
        [Locale.PortugueseBR]: "Shinji Ikari ouvindo música",
        [Locale.Turkish]: "Shinji Ikari müzik dinliyor",
        [Locale.Italian]: "Shinji Ikari ascolta musica",
        [Locale.Indonesian]: "Shinji Ikari mendengarkan musik",
        [Locale.Czech]: "Shinji Ikari poslouchá hudbu",
        [Locale.Japanese]: "音楽を聴くシンジ・イカリ",
        [Locale.Korean]: "음악을 듣는 신지 이카리",
        [Locale.ChineseCN]: "碇真嗣听音乐",
    }),
    topics: [Topic.Anime, Topic.Evangelion],
    types: [Type.TextBottom, Type.FaceImage],
    width: 640,
    height: 480,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Shinji's face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiIkariListeningToMusic.png"
                width={640}
                height={480}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={155}
                height={155}
                style={{
                    position: "absolute",
                    top: 105,
                    left: 185,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-45deg)",
                    filter: "sepia(1) hue-rotate(200deg) saturate(2)",
                }}
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
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
