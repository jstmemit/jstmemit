import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adOsakaStudying: Template = {
    name: "adOsakaStudying",
    displayName: buildLocales("Osaka studying", {
        [Locale.Russian]: "Осака учится",
        [Locale.Ukrainian]: "Осака вчиться",
        [Locale.Dutch]: "Osaka studeert",
        [Locale.French]: "Osaka étudie",
        [Locale.German]: "Osaka lernt",
        [Locale.Polish]: "Osaka się uczy",
        [Locale.SpanishES]: "Osaka estudiando",
        [Locale.SpanishLATAM]: "Osaka estudiando",
        [Locale.PortugueseBR]: "Osaka estudando",
        [Locale.Turkish]: "Osaka ders çalışıyor",
        [Locale.Italian]: "Osaka studia",
        [Locale.Indonesian]: "Osaka belajar",
        [Locale.Czech]: "Osaka se učí",
        [Locale.Japanese]: "大阪 勉強",
        [Locale.Korean]: "오사카 공부",
        [Locale.ChineseCN]: "大阪学习",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 464,
    animationDuration: 4040,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adOsakaStudying.gif"
                width={500}
                height={374}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
