import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobRainbow: Template = {
    name: "spongebobRainbow",
    displayName: buildLocales("Rainbow", {
        [Locale.Russian]: "Радуга",
        [Locale.Ukrainian]: "Веселка",
        [Locale.Dutch]: "Regenboog",
        [Locale.French]: "Arc-en-ciel",
        [Locale.German]: "Regenbogen",
        [Locale.Polish]: "Tęcza",
        [Locale.SpanishES]: "Arcoíris",
        [Locale.SpanishLATAM]: "Arcoíris",
        [Locale.PortugueseBR]: "Arco-íris",
        [Locale.Turkish]: "Gökkuşağı",
        [Locale.Italian]: "Arcobaleno",
        [Locale.Indonesian]: "Pelangi",
        [Locale.Czech]: "Duha",
        [Locale.Japanese]: "虹",
        [Locale.Korean]: "무지개",
        [Locale.ChineseCN]: "彩虹",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 1920,
    height: 1400,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "SpongeBob`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobRainbow.jpg"
                width={1920}
                height={1200}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={700}
                height={700}
                style={{
                    position: "absolute",
                    top: 275,
                    left: "50%",
                    transform: "translateX(-50%)",
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
                    height: "200px",
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
                        fontSize: 80,
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
