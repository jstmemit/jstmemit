import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaAquaPleading: Template = {
    name: "konosubaAquaPleading",
    displayName: buildLocales("Pleading Aqua", {
        [Locale.Russian]: "Просящая Аква",
        [Locale.Ukrainian]: "Аква просить",
        [Locale.Dutch]: "Pleitende Aqua",
        [Locale.French]: "Aqua implorante",
        [Locale.German]: "Bittende Aqua",
        [Locale.Polish]: "Prosząca Aqua",
        [Locale.SpanishES]: "Aqua suplicando",
        [Locale.SpanishLATAM]: "Aqua suplicando",
        [Locale.PortugueseBR]: "Aqua suplicando",
        [Locale.Turkish]: "Yalvaran Aqua",
        [Locale.Italian]: "Aqua implorante",
        [Locale.Indonesian]: "Aqua memohon",
        [Locale.Czech]: "Prosící Aqua",
        [Locale.Japanese]: "懇願するアクア",
        [Locale.Korean]: "부탁하는 아쿠아",
        [Locale.ChineseCN]: "恳求的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 4700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaPleading.gif"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
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
