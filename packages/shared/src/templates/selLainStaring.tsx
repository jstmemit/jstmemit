import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainStaring: Template = {
    name: "selLainStaring",
    displayName: buildLocales("Lain staring", {
        [Locale.Russian]: "Смотрящая Лэйн",
        [Locale.Ukrainian]: "Лейн пильно дивиться",
        [Locale.Dutch]: "Starende Lain",
        [Locale.French]: "Lain regardant fixement",
        [Locale.German]: "Starrende Lain",
        [Locale.Polish]: "Wpatrująca się Lain",
        [Locale.SpanishES]: "Lain mirando fijamente",
        [Locale.SpanishLATAM]: "Lain mirando fijamente",
        [Locale.PortugueseBR]: "Lain encarando",
        [Locale.Turkish]: "Dik dik bakan Lain",
        [Locale.Italian]: "Lain che fissa",
        [Locale.Indonesian]: "Lain menatap",
        [Locale.Czech]: "Zírající Lain",
        [Locale.Japanese]: "見つめる玲音",
        [Locale.Korean]: "응시하는 레인",
        [Locale.ChineseCN]: "凝视的玲音",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 502,
    height: 453,
    animationDuration: 950,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/selLainStaring.gif"
                width={502}
                height={353}
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
