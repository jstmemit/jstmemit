import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaEatingGround: Template = {
    name: "konosubaAquaEatingGround",
    displayName: buildLocales("Aqua eating dirt", {
        [Locale.Russian]: "Аква ест землю",
        [Locale.Ukrainian]: "Аква їсть землю",
        [Locale.Dutch]: "Aqua eet aarde",
        [Locale.French]: "Aqua mangeant de la terre",
        [Locale.German]: "Aqua isst Erde",
        [Locale.Polish]: "Aqua jedząca ziemię",
        [Locale.SpanishES]: "Aqua comiendo tierra",
        [Locale.SpanishLATAM]: "Aqua comiendo tierra",
        [Locale.PortugueseBR]: "Aqua comendo terra",
        [Locale.Turkish]: "Toprak yiyen Aqua",
        [Locale.Italian]: "Aqua che mangia la terra",
        [Locale.Indonesian]: "Aqua memakan tanah",
        [Locale.Czech]: "Aqua jící hlínu",
        [Locale.Japanese]: "土を食べるアクア",
        [Locale.Korean]: "흙을 먹는 아쿠아",
        [Locale.ChineseCN]: "吃土的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1020,
    height: 637,
    animationDuration: 740,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaEatingGround.gif"
                width={510}
                height={637}
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 70,
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
