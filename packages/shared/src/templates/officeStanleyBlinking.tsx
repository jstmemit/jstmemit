import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const officeStanleyBlinking: Template = {
    name: "officeStanleyBlinking",
    displayName: buildLocales("Stanley blinking", {
        [Locale.Russian]: "Стэнли моргает",
        [Locale.Ukrainian]: "Стенлі кліпає",
        [Locale.Dutch]: "Stanley knippert",
        [Locale.French]: "Stanley qui cligne des yeux",
        [Locale.German]: "Stanley blinzelt",
        [Locale.Polish]: "Stanley mruga",
        [Locale.SpanishES]: "Stanley parpadeando",
        [Locale.SpanishLATAM]: "Stanley parpadeando",
        [Locale.PortugueseBR]: "Stanley piscando",
        [Locale.Turkish]: "Stanley göz kırpıyor",
        [Locale.Italian]: "Stanley che sbatte le palpebre",
        [Locale.Indonesian]: "Stanley berkedip",
        [Locale.Czech]: "Stanley mrká",
        [Locale.Japanese]: "瞬きするスタンリー",
        [Locale.Korean]: "눈을 깜빡이는 스탠리",
        [Locale.ChineseCN]: "斯坦利眨眼",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 442,
    animationDuration: 420,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/officeStanleyBlinking.gif"
                width={500}
                height={352}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
