import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaCrying1: Template = {
    name: "konosubaAquaCrying1",
    displayName: buildLocales("Crying Aqua 1", {
        [Locale.Russian]: "Плачущая Аква 1",
        [Locale.Ukrainian]: "Заплакана Аква 1",
        [Locale.Dutch]: "Huilende Aqua 1",
        [Locale.French]: "Aqua qui pleure 1",
        [Locale.German]: "Weinende Aqua 1",
        [Locale.Polish]: "Płacząca Aqua 1",
        [Locale.SpanishES]: "Aqua llorando 1",
        [Locale.SpanishLATAM]: "Aqua llorando 1",
        [Locale.PortugueseBR]: "Aqua chorando 1",
        [Locale.Turkish]: "Ağlayan Aqua 1",
        [Locale.Italian]: "Aqua che piange 1",
        [Locale.Indonesian]: "Aqua menangis 1",
        [Locale.Czech]: "Plačící Aqua 1",
        [Locale.Japanese]: "泣くアクア 1",
        [Locale.Korean]: "우는 아쿠아 1",
        [Locale.ChineseCN]: "哭泣的阿库娅 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1080,
    height: 457,
    animationDuration: 140,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaCrying.gif"
                width={540}
                height={457}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
