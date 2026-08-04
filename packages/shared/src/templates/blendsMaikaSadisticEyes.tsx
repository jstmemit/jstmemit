import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsMaikaSadisticEyes: Template = {
    name: "blendsMaikaSadisticEyes",
    displayName: buildLocales("Maika sadistic eyes", {
        [Locale.Russian]: "Майка с садистским взглядом",
        [Locale.Ukrainian]: "Майка із садистським поглядом",
        [Locale.Dutch]: "Maika met sadistische blik",
        [Locale.French]: "Maika avec un regard sadique",
        [Locale.German]: "Maika mit sadistischem Blick",
        [Locale.Polish]: "Maika z sadystycznym spojrzeniem",
        [Locale.SpanishES]: "Maika con mirada sádica",
        [Locale.SpanishLATAM]: "Maika con mirada sádica",
        [Locale.PortugueseBR]: "Maika com olhar sádico",
        [Locale.Turkish]: "Maika sadist bakışlarla",
        [Locale.Italian]: "Maika con sguardo sadico",
        [Locale.Indonesian]: "Maika dengan tatapan sadis",
        [Locale.Czech]: "Maika se sadistickým pohledem",
        [Locale.Japanese]: "マイカのサディスティックな目",
        [Locale.Korean]: "마이카 사디스틱한 눈빛",
        [Locale.ChineseCN]: "麻衣花施虐的眼神",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 533,
    height: 390,
    animationDuration: 4040,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaSadisticEyes.webp"
                width={533}
                height={300}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
