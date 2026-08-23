import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const tsWoodyStare: Template = {
    name: "tsWoodyStare",
    displayName: buildLocales("Woody staring", {
        [Locale.Russian]: "Вуди пристально смотрит",
        [Locale.Ukrainian]: "Вуді пильно дивиться",
        [Locale.Dutch]: "Woody staart",
        [Locale.French]: "Woody qui fixe",
        [Locale.German]: "Woody starrt",
        [Locale.Polish]: "Chudy się gapi",
        [Locale.SpanishES]: "Woody mirando fijamente",
        [Locale.SpanishLATAM]: "Woody mirando fijamente",
        [Locale.PortugueseBR]: "Woody encarando",
        [Locale.Turkish]: "Woody dik dik bakıyor",
        [Locale.Italian]: "Woody che fissa",
        [Locale.Indonesian]: "Woody menatap",
        [Locale.Czech]: "Woody zírá",
        [Locale.Japanese]: "見つめるウッディ",
        [Locale.Korean]: "응시하는 우디",
        [Locale.ChineseCN]: "盯着看的胡迪",
    }),
    topics: [Topic.Reaction, Topic.Cartoons, Topic.ToyStory],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 450,
    animationDuration: 2400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tsWoodyStare.gif"
                width={480}
                height={360}
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
