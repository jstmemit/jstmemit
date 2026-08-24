import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenExpectationVsReality: Template = {
    name: "frierenExpectationVsReality",
    displayName: buildLocales("Frieren expectation vs reality", {
        [Locale.Russian]: "Фрирен ожидание и реальность",
        [Locale.Ukrainian]: "Фрірен очікування та реальність",
        [Locale.Dutch]: "Frieren verwachting vs realiteit",
        [Locale.French]: "Frieren attente vs réalité",
        [Locale.German]: "Frieren Erwartung vs Realität",
        [Locale.Polish]: "Frieren oczekiwania vs rzeczywistość",
        [Locale.SpanishES]: "Frieren expectativa vs realidad",
        [Locale.SpanishLATAM]: "Frieren expectativa vs realidad",
        [Locale.PortugueseBR]: "Frieren expectativa vs realidade",
        [Locale.Turkish]: "Frieren beklenti vs gerçek",
        [Locale.Italian]: "Frieren aspettativa vs realtà",
        [Locale.Indonesian]: "Frieren ekspektasi vs realita",
        [Locale.Czech]: "Frieren očekávání vs realita",
        [Locale.Japanese]: "フリーレン 理想と現実",
        [Locale.Korean]: "프리렌 이상과 현실",
        [Locale.ChineseCN]: "芙莉莲期望与现实",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TwoOption, Type.TextLeftWithBackground],
    width: 638,
    height: 640,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 10 },
        { id: 1, description: "second option", minLength: 1, maxLength: 10 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenExpectationVsReality.png"
                width={319}
                height={640}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 35,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 35,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
