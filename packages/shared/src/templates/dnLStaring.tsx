import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dnLStaring: Template = {
    name: "dnLStaring",
    displayName: buildLocales("L staring", {
        [Locale.Russian]: "L пристально смотрит",
        [Locale.Ukrainian]: "L пильно дивиться",
        [Locale.Dutch]: "L staart",
        [Locale.French]: "L qui fixe du regard",
        [Locale.German]: "L starrt",
        [Locale.Polish]: "L wpatruje się",
        [Locale.SpanishES]: "L mirando fijamente",
        [Locale.SpanishLATAM]: "L mirando fijamente",
        [Locale.PortugueseBR]: "L encarando",
        [Locale.Turkish]: "L dik dik bakıyor",
        [Locale.Italian]: "L che fissa lo sguardo",
        [Locale.Indonesian]: "L menatap tajam",
        [Locale.Czech]: "L upřeně zírá",
        [Locale.Japanese]: "じっと見つめるL",
        [Locale.Korean]: "응시하는 L",
        [Locale.ChineseCN]: "L凝视",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DeathNote],
    types: [Type.TextLeftWithBackground],
    width: 1350,
    height: 675,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dnLStaring.png"
                width={675}
                height={675}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
