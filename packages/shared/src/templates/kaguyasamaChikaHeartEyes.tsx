import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaHeartEyes: Template = {
    name: "kaguyasamaChikaHeartEyes",
    displayName: buildLocales("Heart-eyed Chika", {
        [Locale.Russian]: "Чика с сердечками в глазах",
        [Locale.Ukrainian]: "Чіка із сердечками в очах",
        [Locale.Dutch]: "Chika met hartjesogen",
        [Locale.French]: "Chika avec des cœurs dans les yeux",
        [Locale.German]: "Chika mit Herzaugen",
        [Locale.Polish]: "Chika z serduszkami w oczach",
        [Locale.SpanishES]: "Chika con ojos de corazón",
        [Locale.SpanishLATAM]: "Chika con ojos de corazón",
        [Locale.PortugueseBR]: "Chika com olhos de coração",
        [Locale.Turkish]: "Kalp gözlü Chika",
        [Locale.Italian]: "Chika con gli occhi a cuore",
        [Locale.Indonesian]: "Chika dengan mata hati",
        [Locale.Czech]: "Chika se srdíčky v očích",
        [Locale.Japanese]: "ハート目のチカ",
        [Locale.Korean]: "하트 눈의 치카",
        [Locale.ChineseCN]: "爱心眼的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 2000,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaHeartEyes.gif"
                width={480}
                height={270}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 30,
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
