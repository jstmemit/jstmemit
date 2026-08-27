import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsLoisInBed: Template = {
    name: "griffinsLoisInBed",
    displayName: buildLocales("Lois in bed", {
        [Locale.Russian]: "Лоис в постели",
        [Locale.Ukrainian]: "Лоїс у ліжку",
        [Locale.Dutch]: "Lois in bed",
        [Locale.French]: "Lois au lit",
        [Locale.German]: "Lois im Bett",
        [Locale.Polish]: "Lois w łóżku",
        [Locale.SpanishES]: "Lois en la cama",
        [Locale.SpanishLATAM]: "Lois en la cama",
        [Locale.PortugueseBR]: "Lois na cama",
        [Locale.Turkish]: "Lois yatakta",
        [Locale.Italian]: "Lois a letto",
        [Locale.Indonesian]: "Lois di tempat tidur",
        [Locale.Czech]: "Lois v posteli",
        [Locale.Japanese]: "ベッドにいるルイス",
        [Locale.Korean]: "침대에 있는 로이스",
        [Locale.ChineseCN]: "洛伊斯在床上",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextTop, Type.FaceImage],
    width: 735,
    height: 479,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [
        { id: 0, description: "Lois`s face" },
        { id: 1, description: "Peter`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsLoisInBed.png"
                width={735}
                height={479}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "6%",
                    right: "23%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    bottom: "32%",
                    left: "25%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
