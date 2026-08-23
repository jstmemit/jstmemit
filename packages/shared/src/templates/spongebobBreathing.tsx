import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobBreathing: Template = {
    name: "spongebobBreathing",
    displayName: buildLocales("SpongeBob breathing", {
        [Locale.Russian]: "Губка Боб дышит",
        [Locale.Ukrainian]: "Губка Боб дихає",
        [Locale.Dutch]: "SpongeBob ademt",
        [Locale.French]: "Bob l'éponge qui respire",
        [Locale.German]: "SpongeBob atmet",
        [Locale.Polish]: "SpongeBob oddycha",
        [Locale.SpanishES]: "Bob Esponja respirando",
        [Locale.SpanishLATAM]: "Bob Esponja respirando",
        [Locale.PortugueseBR]: "Bob Esponja respirando",
        [Locale.Turkish]: "Nefes alan SüngerBob",
        [Locale.Italian]: "SpongeBob che respira",
        [Locale.Indonesian]: "SpongeBob bernapas",
        [Locale.Czech]: "SpongeBob dýchá",
        [Locale.Japanese]: "息をするスポンジ・ボブ",
        [Locale.Korean]: "숨쉬는 스폰지밥",
        [Locale.ChineseCN]: "呼吸的海绵宝宝",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.SpongeBob],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 449,
    animationDuration: 300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/spongebobBreathing.gif"
                width={500}
                height={359}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
