import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ceLucyLaughingVsCold: Template = {
    name: "ceLucyLaughingVsCold",
    displayName: buildLocales("Lucy laughing vs cold", {
        [Locale.Russian]: "Люси смеётся vs равнодушна",
        [Locale.Ukrainian]: "Люсі сміється vs байдужа",
        [Locale.Dutch]: "Lucy lachend vs koud",
        [Locale.French]: "Lucy rieuse vs froide",
        [Locale.German]: "Lucy lachend vs. kalt",
        [Locale.Polish]: "Lucy śmiejąca się vs obojętna",
        [Locale.SpanishES]: "Lucy riendo vs fría",
        [Locale.SpanishLATAM]: "Lucy riendo vs fría",
        [Locale.PortugueseBR]: "Lucy rindo vs fria",
        [Locale.Turkish]: "Lucy gülüyor vs soğuk",
        [Locale.Italian]: "Lucy che ride vs fredda",
        [Locale.Indonesian]: "Lucy tertawa vs dingin",
        [Locale.Czech]: "Lucy se směje vs chladná",
        [Locale.Japanese]: "笑うルーシー vs 冷たいルーシー",
        [Locale.Korean]: "웃는 루시 vs 냉담한 루시",
        [Locale.ChineseCN]: "露西大笑vs冷漠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.TwoOption, Type.TextLeftWithBackground],
    width: 2046,
    height: 1846,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 15 },
        { id: 1, description: "second option", minLength: 1, maxLength: 15 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceLucyLaughingVsCold.png"
                width={1023}
                height={1846}
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 90,
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 90,
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
