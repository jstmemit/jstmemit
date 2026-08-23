import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaMeguminCryingSmilingFace: Template = {
    name: "konosubaMeguminCryingSmilingFace",
    displayName: buildLocales("Crying and smiling Megumin", {
        [Locale.Russian]: "Плачущая и улыбающаяся Мегумин",
        [Locale.Ukrainian]: "Заплакана Меґумін з посмішкою",
        [Locale.Dutch]: "Huilende en glimlachende Megumin",
        [Locale.French]: "Megumin qui pleure et sourit",
        [Locale.German]: "Weinende und lächelnde Megumin",
        [Locale.Polish]: "Płacząca i uśmiechająca się Megumin",
        [Locale.SpanishES]: "Megumin llorando y sonriendo",
        [Locale.SpanishLATAM]: "Megumin llorando y sonriendo",
        [Locale.PortugueseBR]: "Megumin chorando e sorrindo",
        [Locale.Turkish]: "Ağlayan ve gülümseyen Megumin",
        [Locale.Italian]: "Megumin che piange e sorride",
        [Locale.Indonesian]: "Megumin menangis dan tersenyum",
        [Locale.Czech]: "Plačící a usmívající se Megumin",
        [Locale.Japanese]: "泣き笑いするめぐみん",
        [Locale.Korean]: "울면서 웃는 메구민",
        [Locale.ChineseCN]: "又哭又笑的惠惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 450,
    animationDuration: 840,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaMeguminCryingSmilingFace.gif"
                width={540}
                height={360}
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
