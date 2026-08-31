import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const opmSaitamaEatingSonicsSword: Template = {
    name: "opmSaitamaEatingSonicsSword",
    displayName: buildLocales("Saitama eating Sonic's sword", {
        [Locale.Russian]: "Сайтама ест меч Соника",
        [Locale.Ukrainian]: "Сайтама їсть меч Соніка",
        [Locale.Dutch]: "Saitama eet Sonics zwaard",
        [Locale.French]: "Saitama mangeant l'épée de Sonic",
        [Locale.German]: "Saitama isst Sonics Schwert",
        [Locale.Polish]: "Saitama jedzący miecz Sonica",
        [Locale.SpanishES]: "Saitama comiendo la espada de Sonic",
        [Locale.SpanishLATAM]: "Saitama comiendo la espada de Sonic",
        [Locale.PortugueseBR]: "Saitama comendo a espada do Sonic",
        [Locale.Turkish]: "Sonic'in kılıcını yiyen Saitama",
        [Locale.Italian]: "Saitama che mangia la spada di Sonic",
        [Locale.Indonesian]: "Saitama memakan pedang Sonic",
        [Locale.Czech]: "Saitama jedící Sonicův meč",
        [Locale.Japanese]: "ソニックの剣を食べるサイタマ",
        [Locale.Korean]: "소닉의 검을 먹는 사이타마",
        [Locale.ChineseCN]: "埼玉吃索尼克的剑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.OnePunchMan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 369,
    animationDuration: 2230,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/opmSaitamaEatingSonicsSword.gif"
                width={500}
                height={269}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
