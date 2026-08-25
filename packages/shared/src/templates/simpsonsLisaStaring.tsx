import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsLisaStaring: Template = {
    name: "simpsonsLisaStaring",
    displayName: buildLocales("Lisa staring", {
        [Locale.Russian]: "Взгляд Лизы",
        [Locale.Ukrainian]: "Погляд Лізи",
        [Locale.Dutch]: "Lisa staart",
        [Locale.French]: "Lisa regarde fixement",
        [Locale.German]: "Lisa starrt",
        [Locale.Polish]: "Spojrzenie Lisy",
        [Locale.SpanishES]: "Lisa mirando fijamente",
        [Locale.SpanishLATAM]: "Lisa mirando fijamente",
        [Locale.PortugueseBR]: "Lisa encarando",
        [Locale.Turkish]: "Lisa bakışı",
        [Locale.Italian]: "Lisa che fissa",
        [Locale.Indonesian]: "Lisa menatap",
        [Locale.Czech]: "Lisa zírá",
        [Locale.Japanese]: "見つめるリサ",
        [Locale.Korean]: "빤히 쳐다보는 리사",
        [Locale.ChineseCN]: "丽莎凝视",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottom],
    width: 1080,
    height: 811,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "Lisa`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsLisaStaring.png"
                width={1080}
                height={811}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: "25%",
                    left: "30%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "20%",
                    bottom: "8%",
                    width: "50%",
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
                        fontSize: 60,
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
