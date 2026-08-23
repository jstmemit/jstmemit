import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adOsakaStaring: Template = {
    name: "adOsakaStaring",
    displayName: buildLocales("Osaka staring", {
        [Locale.Russian]: "Осака пристально смотрит",
        [Locale.Ukrainian]: "Осака пильно дивиться",
        [Locale.Dutch]: "Osaka staart",
        [Locale.French]: "Osaka qui fixe",
        [Locale.German]: "Osaka starrt",
        [Locale.Polish]: "Osaka wpatruje się",
        [Locale.SpanishES]: "Osaka mirando fijamente",
        [Locale.SpanishLATAM]: "Osaka mirando fijamente",
        [Locale.PortugueseBR]: "Osaka encarando",
        [Locale.Turkish]: "Osaka dik dik bakıyor",
        [Locale.Italian]: "Osaka che fissa",
        [Locale.Indonesian]: "Osaka menatap",
        [Locale.Czech]: "Osaka zírá",
        [Locale.Japanese]: "大阪 じっと見つめる",
        [Locale.Korean]: "오사카 빤히 쳐다봄",
        [Locale.ChineseCN]: "大阪凝视",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextLeftWithBackground],
    width: 948,
    height: 577,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adOsakaStaring.png"
                width={474}
                height={577}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
