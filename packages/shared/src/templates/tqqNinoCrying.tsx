import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqNinoCrying: Template = {
    name: "tqqNinoCrying",
    displayName: buildLocales("Nino crying", {
        [Locale.Russian]: "Плачущая Нино",
        [Locale.Ukrainian]: "Заплакана Ніно",
        [Locale.Dutch]: "Huilende Nino",
        [Locale.French]: "Nino en pleurs",
        [Locale.German]: "Weinende Nino",
        [Locale.Polish]: "Płacząca Nino",
        [Locale.SpanishES]: "Nino llorando",
        [Locale.SpanishLATAM]: "Nino llorando",
        [Locale.PortugueseBR]: "Nino chorando",
        [Locale.Turkish]: "Ağlayan Nino",
        [Locale.Italian]: "Nino che piange",
        [Locale.Indonesian]: "Nino menangis",
        [Locale.Czech]: "Plačící Nino",
        [Locale.Japanese]: "泣く二乃",
        [Locale.Korean]: "우는 니노",
        [Locale.ChineseCN]: "哭泣的二乃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 364,
    height: 280,
    animationDuration: 2670,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqNinoCrying.gif"
                width={364}
                height={200}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "80px",
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
