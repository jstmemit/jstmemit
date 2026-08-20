import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const eightySixHenriettaAngry: Template = {
    name: "eightySixHenriettaAngry",
    displayName: buildLocales("Henrietta angry", {
        [Locale.Russian]: "Злая Генриетта",
        [Locale.Ukrainian]: "Зла Генрієтта",
        [Locale.Dutch]: "Boze Henrietta",
        [Locale.French]: "Henrietta en colère",
        [Locale.German]: "Wütende Henrietta",
        [Locale.Polish]: "Zła Henrietta",
        [Locale.SpanishES]: "Henrietta enfadada",
        [Locale.SpanishLATAM]: "Henrietta enojada",
        [Locale.PortugueseBR]: "Henrietta irritada",
        [Locale.Turkish]: "Kızgın Henrietta",
        [Locale.Italian]: "Henrietta arrabbiata",
        [Locale.Indonesian]: "Henrietta marah",
        [Locale.Czech]: "Naštvaná Henrietta",
        [Locale.Japanese]: "怒るヘンリエッタ",
        [Locale.Korean]: "화난 헨리에타",
        [Locale.ChineseCN]: "愤怒的亨丽埃塔",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.EightySix],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 640,
    height: 458,
    animationDuration: 2100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/eightySixHenriettaAngry.gif"
                width={640}
                height={368}
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
                    padding: "10px",
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
