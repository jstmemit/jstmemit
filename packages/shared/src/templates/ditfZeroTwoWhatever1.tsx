import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ditfZeroTwoWhatever1: Template = {
    name: "ditfZeroTwoWhatever1",
    displayName: buildLocales("Zero Two whatever 1", {
        [Locale.Russian]: "Зеро Ту: да без разницы 1",
        [Locale.Ukrainian]: "Зіро Ту: та байдуже 1",
        [Locale.Dutch]: "Zero Two boeit me niet 1",
        [Locale.French]: "Zero Two peu importe 1",
        [Locale.German]: "Zero Two egal 1",
        [Locale.Polish]: "Zero Two obojętnie 1",
        [Locale.SpanishES]: "Zero Two lo que sea 1",
        [Locale.SpanishLATAM]: "Zero Two lo que sea 1",
        [Locale.PortugueseBR]: "Zero Two tanto faz 1",
        [Locale.Turkish]: "Zero Two her neyse 1",
        [Locale.Italian]: "Zero Two fa lo stesso 1",
        [Locale.Indonesian]: "Zero Two terserah 1",
        [Locale.Czech]: "Zero Two je to jedno 1",
        [Locale.Japanese]: "どうでもいいゼロツー 1",
        [Locale.Korean]: "아무래도 상관없는 제로투 1",
        [Locale.ChineseCN]: "02无所谓 1",
    }),
    topics: [Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.ObjectImage, Type.TextBottomWithBackground, Type.TwoOption],
    width: 736,
    height: 524,
    texts: [{ id: 0, description: "the phrase Zero Two says", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "object in left hand" },
        { id: 1, description: "object in right hand" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoWhatever.png"
                width={736}
                height={414}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{ position: "absolute", top: 150, left: 60, borderRadius: "100%", objectFit: "cover" }}
            />
            <img
                src={images[1]}
                width={150}
                height={150}
                style={{ position: "absolute", top: 150, right: 50, borderRadius: "100%", objectFit: "cover" }}
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
                        fontFamily: "Comic Sans MS",
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
