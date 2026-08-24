import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaNervousSmug: Template = {
    name: "konosubaAquaNervousSmug",
    displayName: buildLocales("Aqua nervous smug", {
        [Locale.Russian]: "Аква: нервная ухмылка",
        [Locale.Ukrainian]: "Аква: нервова усмішка",
        [Locale.Dutch]: "Aqua nerveuze grijns",
        [Locale.French]: "Aqua sourire nerveux et suffisant",
        [Locale.German]: "Aqua nervöses Grinsen",
        [Locale.Polish]: "Aqua nerwowy uśmieszek",
        [Locale.SpanishES]: "Aqua sonrisa nerviosa",
        [Locale.SpanishLATAM]: "Aqua sonrisa nerviosa",
        [Locale.PortugueseBR]: "Aqua sorrisinho nervoso",
        [Locale.Turkish]: "Aqua gergin sırıtış",
        [Locale.Italian]: "Aqua sorrisetto nervoso",
        [Locale.Indonesian]: "Aqua senyum gugup",
        [Locale.Czech]: "Aqua nervózní úšklebek",
        [Locale.Japanese]: "焦りながらドヤ顔のアクア",
        [Locale.Korean]: "긴장하며 거들먹거리는 아쿠아",
        [Locale.ChineseCN]: "阿库娅紧张得意",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextLeftWithBackground],
    width: 960,
    height: 640,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konosubaAquaNervousSmug.png"
                width={480}
                height={640}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 8,
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
