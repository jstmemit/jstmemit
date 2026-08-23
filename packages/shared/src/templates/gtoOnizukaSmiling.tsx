import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gtoOnizukaSmiling: Template = {
    name: "gtoOnizukaSmiling",
    displayName: buildLocales("Smiling Onizuka", {
        [Locale.Russian]: "Улыбающийся Онидзука",
        [Locale.Ukrainian]: "Усміхнений Онідзука",
        [Locale.Dutch]: "Lachende Onizuka",
        [Locale.French]: "Onizuka souriant",
        [Locale.German]: "Lächelnder Onizuka",
        [Locale.Polish]: "Uśmiechnięty Onizuka",
        [Locale.SpanishES]: "Onizuka sonriendo",
        [Locale.SpanishLATAM]: "Onizuka sonriendo",
        [Locale.PortugueseBR]: "Onizuka sorrindo",
        [Locale.Turkish]: "Gülümseyen Onizuka",
        [Locale.Italian]: "Onizuka sorridente",
        [Locale.Indonesian]: "Onizuka tersenyum",
        [Locale.Czech]: "Usmívající se Onizuka",
        [Locale.Japanese]: "笑顔の鬼塚",
        [Locale.Korean]: "미소 짓는 오니즈카",
        [Locale.ChineseCN]: "微笑的鬼冢",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GreatTeacherOnizuka],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 369,
    animationDuration: 1000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gtoOnizukaSmiling.gif"
                width={500}
                height={279}
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
