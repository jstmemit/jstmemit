import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanTurboGrannyHearingMusic1: Template = {
    name: "dandadanTurboGrannyHearingMusic1",
    displayName: buildLocales("Turbo Granny listening to music 1", {
        [Locale.Russian]: "Турбо Бабуля слушает музыку 1",
        [Locale.Ukrainian]: "Турбо Бабуся слухає музику 1",
        [Locale.Dutch]: "Turbo Granny luistert naar muziek 1",
        [Locale.French]: "Turbo Granny écoute de la musique 1",
        [Locale.German]: "Turbo-Granny hört Musik 1",
        [Locale.Polish]: "Turbo Babcia słucha muzyki 1",
        [Locale.SpanishES]: "Turbo Granny escuchando música 1",
        [Locale.SpanishLATAM]: "Turbo Granny escuchando música 1",
        [Locale.PortugueseBR]: "Turbo Granny ouvindo música 1",
        [Locale.Turkish]: "Turbo Granny müzik dinliyor 1",
        [Locale.Italian]: "Turbo Granny che ascolta musica 1",
        [Locale.Indonesian]: "Turbo Granny mendengarkan musik 1",
        [Locale.Czech]: "Turbo Granny poslouchá hudbu 1",
        [Locale.Japanese]: "音楽を聴くターボババア 1",
        [Locale.Korean]: "음악을 듣는 터보 할멈 1",
        [Locale.ChineseCN]: "高速婆婆听音乐 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground],
    width: 600,
    height: 458,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanTurboGrannyHearingMusic1.png"
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
                    height: "120px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
