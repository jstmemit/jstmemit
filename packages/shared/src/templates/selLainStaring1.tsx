import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainStaring1: Template = {
    name: "selLainStaring1",
    displayName: buildLocales("Lain staring 1", {
        [Locale.Russian]: "Смотрящая Лэйн 1",
        [Locale.Ukrainian]: "Лейн пильно дивиться 1",
        [Locale.Dutch]: "Starende Lain 1",
        [Locale.French]: "Lain regardant fixement 1",
        [Locale.German]: "Starrende Lain 1",
        [Locale.Polish]: "Wpatrująca się Lain 1",
        [Locale.SpanishES]: "Lain mirando fijamente 1",
        [Locale.SpanishLATAM]: "Lain mirando fijamente 1",
        [Locale.PortugueseBR]: "Lain encarando 1",
        [Locale.Turkish]: "Dik dik bakan Lain 1",
        [Locale.Italian]: "Lain che fissa 1",
        [Locale.Indonesian]: "Lain menatap 1",
        [Locale.Czech]: "Zírající Lain 1",
        [Locale.Japanese]: "見つめる玲音 1",
        [Locale.Korean]: "응시하는 레인 1",
        [Locale.ChineseCN]: "凝视的玲音 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 457,
    animationDuration: 1000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/selLainStaring1.gif"
                width={500}
                height={357}
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
