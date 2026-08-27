import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaSadisticSmile: Template = {
    name: "blendsMaikaSadisticSmile",
    displayName: buildLocales("Maika sadistic smile", {
        [Locale.Russian]: "Майка с садистской улыбкой",
        [Locale.Ukrainian]: "Майка із садистською посмішкою",
        [Locale.Dutch]: "Maika met sadistische glimlach",
        [Locale.French]: "Maika avec un sourire sadique",
        [Locale.German]: "Maika mit sadistischem Lächeln",
        [Locale.Polish]: "Maika z sadystycznym uśmiechem",
        [Locale.SpanishES]: "Maika con sonrisa sádica",
        [Locale.SpanishLATAM]: "Maika con sonrisa sádica",
        [Locale.PortugueseBR]: "Maika com sorriso sádico",
        [Locale.Turkish]: "Maika sadist gülümsemesiyle",
        [Locale.Italian]: "Maika con sorriso sadico",
        [Locale.Indonesian]: "Maika dengan senyum sadis",
        [Locale.Czech]: "Maika se sadistickým úsměvem",
        [Locale.Japanese]: "マイカのサディスティックな笑み",
        [Locale.Korean]: "마이카 사디스틱한 미소",
        [Locale.ChineseCN]: "麻衣花施虐的微笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextBottomWithBackground],
    width: 787,
    height: 552,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaSadisticSmile.png"
                width={787}
                height={442}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
