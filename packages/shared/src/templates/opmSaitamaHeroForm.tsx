import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const opmSaitamaHeroForm: Template = {
    name: "opmSaitamaHeroForm",
    displayName: buildLocales("Saitama hero form", {
        [Locale.Russian]: "Геройская форма Сайтамы",
        [Locale.Ukrainian]: "Геройська форма Сайтами",
        [Locale.Dutch]: "Saitama heldenvorm",
        [Locale.French]: "Forme héroïque de Saitama",
        [Locale.German]: "Saitamas Heldenform",
        [Locale.Polish]: "Forma bohatera Saitamy",
        [Locale.SpanishES]: "Forma de héroe de Saitama",
        [Locale.SpanishLATAM]: "Forma de héroe de Saitama",
        [Locale.PortugueseBR]: "Forma de herói do Saitama",
        [Locale.Turkish]: "Saitama kahraman formu",
        [Locale.Italian]: "Forma da eroe di Saitama",
        [Locale.Indonesian]: "Wujud pahlawan Saitama",
        [Locale.Czech]: "Hrdinská podoba Saitamy",
        [Locale.Japanese]: "サイタマのヒーロー姿",
        [Locale.Korean]: "사이타마 히어로 폼",
        [Locale.ChineseCN]: "埼玉英雄形态",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.OnePunchMan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 3210,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/opmSaitamaHeroForm.gif"
                width={500}
                height={281}
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
