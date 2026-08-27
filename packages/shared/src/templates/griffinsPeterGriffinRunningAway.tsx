import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsPeterGriffinRunningAway: Template = {
    name: "griffinsPeterGriffinRunningAway",
    displayName: buildLocales("Peter Griffin running away", {
        [Locale.Russian]: "Питер Гриффин убегает",
        [Locale.Ukrainian]: "Пітер Гріффін тікає",
        [Locale.Dutch]: "Peter Griffin rent weg",
        [Locale.French]: "Peter Griffin s'enfuyant",
        [Locale.German]: "Peter Griffin rennt weg",
        [Locale.Polish]: "Uciekający Peter Griffin",
        [Locale.SpanishES]: "Peter Griffin huyendo",
        [Locale.SpanishLATAM]: "Peter Griffin huyendo",
        [Locale.PortugueseBR]: "Peter Griffin fugindo",
        [Locale.Turkish]: "Kaçan Peter Griffin",
        [Locale.Italian]: "Peter Griffin che scappa",
        [Locale.Indonesian]: "Peter Griffin melarikan diri",
        [Locale.Czech]: "Peter Griffin utíká",
        [Locale.Japanese]: "逃げるピーター・グリフィン",
        [Locale.Korean]: "도망치는 피터 그리핀",
        [Locale.ChineseCN]: "彼得·格里芬逃跑",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextTop, Type.FaceImage],
    width: 800,
    height: 600,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Peter`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterGriffinRunningAway.png"
                width={800}
                height={600}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "20%",
                    right: 220,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
