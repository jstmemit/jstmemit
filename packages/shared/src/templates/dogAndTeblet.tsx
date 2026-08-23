import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dogAndTeblet: Template = {
    name: "dogAndTeblet",
    displayName: buildLocales("Dog and tablet", {
        [Locale.Russian]: "Собака и планшет",
        [Locale.Ukrainian]: "Собака і планшет",
        [Locale.Dutch]: "Hond en tablet",
        [Locale.French]: "Chien et tablette",
        [Locale.German]: "Hund und Tablet",
        [Locale.Polish]: "Pies i tablet",
        [Locale.SpanishES]: "Perro y tablet",
        [Locale.SpanishLATAM]: "Perro y tablet",
        [Locale.PortugueseBR]: "Cachorro e tablet",
        [Locale.Turkish]: "Köpek ve tablet",
        [Locale.Italian]: "Cane e tablet",
        [Locale.Indonesian]: "Anjing dan tablet",
        [Locale.Czech]: "Pes a tablet",
        [Locale.Japanese]: "犬とタブレット",
        [Locale.Korean]: "강아지와 태블릿",
        [Locale.ChineseCN]: "狗和平板电脑",
    }),
    topics: [Topic.Animals],
    types: [Type.TextCenter, Type.FaceImage],
    width: 1000,
    height: 572,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "dog face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dogAndTeblet.png"
                width={1000}
                height={572}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "45%",
                    bottom: "30%",
                    width: "40%",
                    height: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
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
