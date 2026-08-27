import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenCrying: Template = {
    name: "frierenCrying",
    displayName: buildLocales("Frieren crying", {
        [Locale.Russian]: "Фрирен плачет",
        [Locale.Ukrainian]: "Фрірен плаче",
        [Locale.Dutch]: "Frieren huilt",
        [Locale.French]: "Frieren qui pleure",
        [Locale.German]: "Frieren weint",
        [Locale.Polish]: "Frieren płacze",
        [Locale.SpanishES]: "Frieren llorando",
        [Locale.SpanishLATAM]: "Frieren llorando",
        [Locale.PortugueseBR]: "Frieren chorando",
        [Locale.Turkish]: "Frieren ağlıyor",
        [Locale.Italian]: "Frieren che piange",
        [Locale.Indonesian]: "Frieren menangis",
        [Locale.Czech]: "Frieren pláče",
        [Locale.Japanese]: "泣くフリーレン",
        [Locale.Korean]: "우는 프리렌",
        [Locale.ChineseCN]: "芙莉莲哭泣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 748,
    height: 374,
    animationDuration: 1100,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/frierenCrying.gif"
                width={374}
                height={374}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
                        lineClamp: 7,
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
