import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const absoluteCinema: Template = {
    name: "absoluteCinema",
    displayName: buildLocales("Absolute cinema", {
        [Locale.Russian]: "Абсолютное кино",
        [Locale.Ukrainian]: "Абсолютне кіно",
        [Locale.Dutch]: "Absolute cinema",
        [Locale.French]: "Cinéma absolu",
        [Locale.German]: "Absolutes Kino",
        [Locale.Polish]: "Absolutne kino",
        [Locale.SpanishES]: "Cine absoluto",
        [Locale.SpanishLATAM]: "Cine absoluto",
        [Locale.PortugueseBR]: "Cinema absoluto",
        [Locale.Turkish]: "Mutlak sinema",
        [Locale.Italian]: "Cinema assoluto",
        [Locale.Indonesian]: "Sinema mutlak",
        [Locale.Czech]: "Absolutní kino",
        [Locale.Japanese]: "アブソリュート・シネマ",
        [Locale.Korean]: "앱솔루트 시네마",
        [Locale.ChineseCN]: "绝对的电影",
    }),
    topics: [Topic.Reaction, Topic.Movies],
    types: [Type.TextTop, Type.FaceImage, Type.DefaultText],
    width: 1230,
    height: 1422,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/absoluteCinema.png"
                width={1230}
                height={1422}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={320}
                height={320}
                style={{
                    position: "absolute",
                    top: 370,
                    left: 460,
                    filter: "grayscale(100%)",
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
                        lineClamp: 3,
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                        fontFamily: font,
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
