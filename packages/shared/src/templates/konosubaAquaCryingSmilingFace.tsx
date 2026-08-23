import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaCryingSmilingFace: Template = {
    name: "konosubaAquaCryingSmilingFace",
    displayName: buildLocales("Crying and smiling Aqua", {
        [Locale.Russian]: "Плачущая и улыбающаяся Аква",
        [Locale.Ukrainian]: "Заплакана Аква з посмішкою",
        [Locale.Dutch]: "Huilende en glimlachende Aqua",
        [Locale.French]: "Aqua qui pleure et sourit",
        [Locale.German]: "Weinende und lächelnde Aqua",
        [Locale.Polish]: "Płacząca i uśmiechająca się Aqua",
        [Locale.SpanishES]: "Aqua llorando y sonriendo",
        [Locale.SpanishLATAM]: "Aqua llorando y sonriendo",
        [Locale.PortugueseBR]: "Aqua chorando e sorrindo",
        [Locale.Turkish]: "Ağlayan ve gülümseyen Aqua",
        [Locale.Italian]: "Aqua che piange e sorride",
        [Locale.Indonesian]: "Aqua menangis dan tersenyum",
        [Locale.Czech]: "Plačící a usmívající se Aqua",
        [Locale.Japanese]: "泣き笑いするアクア",
        [Locale.Korean]: "울면서 웃는 아쿠아",
        [Locale.ChineseCN]: "又哭又笑的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 660,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaCryingSmilingFace.gif"
                width={500}
                height={281}
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
