import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ditfZeroTwoWhatever: Template = {
    name: "ditfZeroTwoWhatever",
    displayName: buildLocales("Zero Two whatever", {
        [Locale.Russian]: "Зеро Ту: да без разницы",
        [Locale.Ukrainian]: "Зіро Ту: та байдуже",
        [Locale.Dutch]: "Zero Two boeit me niet",
        [Locale.French]: "Zero Two peu importe",
        [Locale.German]: "Zero Two egal",
        [Locale.Polish]: "Zero Two obojętnie",
        [Locale.SpanishES]: "Zero Two lo que sea",
        [Locale.SpanishLATAM]: "Zero Two lo que sea",
        [Locale.PortugueseBR]: "Zero Two tanto faz",
        [Locale.Turkish]: "Zero Two her neyse",
        [Locale.Italian]: "Zero Two fa lo stesso",
        [Locale.Indonesian]: "Zero Two terserah",
        [Locale.Czech]: "Zero Two je to jedno",
        [Locale.Japanese]: "どうでもいいゼロツー",
        [Locale.Korean]: "아무래도 상관없는 제로투",
        [Locale.ChineseCN]: "02无所谓",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 736,
    height: 524,
    texts: [{ id: 0, description: "the phrase Zero Two says", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Zero Two's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoWhatever.png"
                width={736}
                height={414}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{ position: "absolute", top: 110, right: 285, borderRadius: "100%", objectFit: "cover" }}
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
                        fontSize: 40,
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
