import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaBenderAsDrake: Template = {
    name: "futuramaBenderAsDrake",
    displayName: buildLocales("Bender as Drake", {
        [Locale.Russian]: "Бендер в роли Дрейка",
        [Locale.Ukrainian]: "Бендер у ролі Дрейка",
        [Locale.Dutch]: "Bender als Drake",
        [Locale.French]: "Bender en Drake",
        [Locale.German]: "Bender als Drake",
        [Locale.Polish]: "Bender jako Drake",
        [Locale.SpanishES]: "Bender como Drake",
        [Locale.SpanishLATAM]: "Bender como Drake",
        [Locale.PortugueseBR]: "Bender como Drake",
        [Locale.Turkish]: "Drake olarak Bender",
        [Locale.Italian]: "Bender come Drake",
        [Locale.Indonesian]: "Bender sebagai Drake",
        [Locale.Czech]: "Bender jako Drake",
        [Locale.Japanese]: "ドレイクのベンダー",
        [Locale.Korean]: "드레이크로 분한 벤더",
        [Locale.ChineseCN]: "扮演德雷克的本德",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 2048,
    height: 2048,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 8 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaBenderAsDrake.png"
                width={2048}
                height={2048}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 9,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 9,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
