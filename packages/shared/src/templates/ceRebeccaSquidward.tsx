import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ceRebeccaSquidward: Template = {
    name: "ceRebeccaSquidward",
    displayName: buildLocales("Rebecca squidward", {
        [Locale.Russian]: "Ребекка в образе Сквидварда",
        [Locale.Ukrainian]: "Ребекка в образі Сквідварда",
        [Locale.Dutch]: "Rebecca als Squidward",
        [Locale.French]: "Rebecca en Carlo",
        [Locale.German]: "Rebecca als Thaddäus",
        [Locale.Polish]: "Rebecca jako Squidward",
        [Locale.SpanishES]: "Rebecca como Calamardo",
        [Locale.SpanishLATAM]: "Rebecca como Calamardo",
        [Locale.PortugueseBR]: "Rebecca como Lula Molusco",
        [Locale.Turkish]: "Rebecca Squidward gibi",
        [Locale.Italian]: "Rebecca come Squiddi",
        [Locale.Indonesian]: "Rebecca sebagai Squidward",
        [Locale.Czech]: "Rebecca jako Squidward",
        [Locale.Japanese]: "イカルドのレベッカ",
        [Locale.Korean]: "징징이 레베카",
        [Locale.ChineseCN]: "丽贝卡扮演章鱼哥",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners, Topic.SpongeBob],
    types: [Type.TextTopWithBackground],
    width: 625,
    height: 592,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceRebeccaSquidward.png"
                width={640}
                height={482}
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
