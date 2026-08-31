import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const opmSaitamaPunch: Template = {
    name: "opmSaitamaPunch",
    displayName: buildLocales("Saitama punch", {
        [Locale.Russian]: "Удар Сайтамы",
        [Locale.Ukrainian]: "Удар Сайтами",
        [Locale.Dutch]: "Saitama stoot",
        [Locale.French]: "Coup de poing de Saitama",
        [Locale.German]: "Saitamas Schlag",
        [Locale.Polish]: "Cios Saitamy",
        [Locale.SpanishES]: "Puñetazo de Saitama",
        [Locale.SpanishLATAM]: "Puñetazo de Saitama",
        [Locale.PortugueseBR]: "Soco do Saitama",
        [Locale.Turkish]: "Saitama yumruğu",
        [Locale.Italian]: "Pugno di Saitama",
        [Locale.Indonesian]: "Pukulan Saitama",
        [Locale.Czech]: "Saitamův úder",
        [Locale.Japanese]: "サイタマのパンチ",
        [Locale.Korean]: "사이타마의 펀치",
        [Locale.ChineseCN]: "埼玉的拳",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.OnePunchMan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 2400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/opmSaitamaPunch.gif"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
