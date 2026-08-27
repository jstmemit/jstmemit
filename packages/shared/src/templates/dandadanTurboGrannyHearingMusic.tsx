import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanTurboGrannyHearingMusic: Template = {
    name: "dandadanTurboGrannyHearingMusic",
    displayName: buildLocales("Turbo Granny listening to music", {
        [Locale.Russian]: "Турбо Бабуля слушает музыку",
        [Locale.Ukrainian]: "Турбо Бабуся слухає музику",
        [Locale.Dutch]: "Turbo Granny luistert naar muziek",
        [Locale.French]: "Turbo Granny écoute de la musique",
        [Locale.German]: "Turbo-Granny hört Musik",
        [Locale.Polish]: "Turbo Babcia słucha muzyki",
        [Locale.SpanishES]: "Turbo Granny escuchando música",
        [Locale.SpanishLATAM]: "Turbo Granny escuchando música",
        [Locale.PortugueseBR]: "Turbo Granny ouvindo música",
        [Locale.Turkish]: "Turbo Granny müzik dinliyor",
        [Locale.Italian]: "Turbo Granny che ascolta musica",
        [Locale.Indonesian]: "Turbo Granny mendengarkan musik",
        [Locale.Czech]: "Turbo Granny poslouchá hudbu",
        [Locale.Japanese]: "音楽を聴くターボババア",
        [Locale.Korean]: "음악을 듣는 터보 할멈",
        [Locale.ChineseCN]: "高速婆婆听音乐",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 600,
    height: 428,
    animationDuration: 510,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dandadanTurboGrannyHearingMusic.gif"
                width={600}
                height={338}
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
                    padding: "15px",
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
