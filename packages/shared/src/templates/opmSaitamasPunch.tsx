import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const opmSaitamasPunch: Template = {
    name: "opmSaitamasPunch",
    displayName: buildLocales("Saitama's punch", {
        [Locale.Russian]: "Удар Сайтамы",
        [Locale.Ukrainian]: "Удар Сайтами",
        [Locale.Dutch]: "Saitama's stoot",
        [Locale.French]: "Coup de poing de Saitama",
        [Locale.German]: "Saitamas Schlag",
        [Locale.Polish]: "Cios Saitamy",
        [Locale.SpanishES]: "Puñetazo de Saitama",
        [Locale.SpanishLATAM]: "Puñetazo de Saitama",
        [Locale.PortugueseBR]: "Soco do Saitama",
        [Locale.Turkish]: "Saitama'nın yumruğu",
        [Locale.Italian]: "Pugno di Saitama",
        [Locale.Indonesian]: "Pukulan Saitama",
        [Locale.Czech]: "Saitamův úder",
        [Locale.Japanese]: "サイタマのパンチ",
        [Locale.Korean]: "사이타마의 펀치",
        [Locale.ChineseCN]: "埼玉的拳",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.OnePunchMan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 480,
    height: 370,
    animationDuration: 3790,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/opmSaitamasPunch.gif"
                width={480}
                height={270}
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
