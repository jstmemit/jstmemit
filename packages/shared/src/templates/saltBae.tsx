import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const saltBae: Template = {
    name: "saltBae",
    displayName: buildLocales("Salt Bae", {
        [Locale.Russian]: "Солт Бэ",
        [Locale.Ukrainian]: "Солт Бе",
        [Locale.Dutch]: "Salt Bae",
        [Locale.French]: "Salt Bae",
        [Locale.German]: "Salt Bae",
        [Locale.Polish]: "Salt Bae",
        [Locale.SpanishES]: "Salt Bae",
        [Locale.SpanishLATAM]: "Salt Bae",
        [Locale.PortugueseBR]: "Salt Bae",
        [Locale.Turkish]: "Salt Bae",
        [Locale.Italian]: "Salt Bae",
        [Locale.Indonesian]: "Salt Bae",
        [Locale.Czech]: "Salt Bae",
        [Locale.Japanese]: "ソルトベエ",
        [Locale.Korean]: "솔트배",
        [Locale.ChineseCN]: "撒盐哥",
    }),
    topics: [Topic.Misc],
    types: [Type.FaceImage, Type.TextBottom],
    width: 1500,
    height: 1495,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "Bae`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/saltBae.png"
                width={1500}
                height={1495}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "30%",
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
                    height: "40%",
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
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
