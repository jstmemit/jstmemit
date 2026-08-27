import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const spongebobGrimace: Template = {
    name: "spongebobGrimace",
    displayName: buildLocales("SpongeBob grimacing", {
        [Locale.Russian]: "Губка Боб морщится",
        [Locale.Ukrainian]: "Губка Боб морщиться",
        [Locale.Dutch]: "SpongeBob grimast",
        [Locale.French]: "Bob l'éponge grimaçant",
        [Locale.German]: "SpongeBob schneidet eine Grimasse",
        [Locale.Polish]: "SpongeBob robi grymas",
        [Locale.SpanishES]: "Bob Esponja haciendo una mueca",
        [Locale.SpanishLATAM]: "Bob Esponja haciendo una mueca",
        [Locale.PortugueseBR]: "Bob Esponja fazendo careta",
        [Locale.Turkish]: "SüngerBob yüzünü buruşturuyor",
        [Locale.Italian]: "SpongeBob che fa una smorfia",
        [Locale.Indonesian]: "SpongeBob meringis",
        [Locale.Czech]: "SpongeBob se šklebí",
        [Locale.Japanese]: "しかめっ面をするスポンジ・ボブ",
        [Locale.Korean]: "찡그리는 스폰지밥",
        [Locale.ChineseCN]: "海绵宝宝做鬼脸",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.SpongeBob],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 449,
    animationDuration: 400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/spongebobGrimace.gif"
                width={500}
                height={359}
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
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
