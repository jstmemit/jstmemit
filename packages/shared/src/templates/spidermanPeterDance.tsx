import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spidermanPeterDance: Template = {
    name: "spidermanPeterDance",
    displayName: buildLocales("Peter dance", {
        [Locale.Russian]: "Танец Питера",
        [Locale.Ukrainian]: "Танець Пітера",
        [Locale.Dutch]: "Peter dans",
        [Locale.French]: "Danse de Peter",
        [Locale.German]: "Peter tanzt",
        [Locale.Polish]: "Taniec Petera",
        [Locale.SpanishES]: "Baile de Peter",
        [Locale.SpanishLATAM]: "Baile de Peter",
        [Locale.PortugueseBR]: "Dança do Peter",
        [Locale.Turkish]: "Peter dansı",
        [Locale.Italian]: "Ballo di Peter",
        [Locale.Indonesian]: "Tarian Peter",
        [Locale.Czech]: "Peterův tanec",
        [Locale.Japanese]: "ピーターのダンス",
        [Locale.Korean]: "피터 댄스",
        [Locale.ChineseCN]: "彼得跳舞",
    }),
    topics: [Topic.SpiderMan, Topic.Movies],
    types: [Type.TextBottom, Type.FaceImage],
    width: 735,
    height: 479,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Spiderman`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spidermanPeterDance.jpg"
                width={735}
                height={479}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "37%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "30%",
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
                        lineClamp: 3,
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
