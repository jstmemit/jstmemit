import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiPaleShock: Template = {
    name: "btrBocchiPaleShock",
    displayName: buildLocales("Bocchi pale shock", {
        [Locale.Russian]: "Бокки бледнеет от шока",
        [Locale.Ukrainian]: "Боккі блідне від шоку",
        [Locale.Dutch]: "Bocchi bleek geschokt",
        [Locale.French]: "Bocchi pâle de choc",
        [Locale.German]: "Bocchi blass vor Schock",
        [Locale.Polish]: "Bocchi blada z szoku",
        [Locale.SpanishES]: "Bocchi pálida por el shock",
        [Locale.SpanishLATAM]: "Bocchi pálida por el shock",
        [Locale.PortugueseBR]: "Bocchi pálida de choque",
        [Locale.Turkish]: "Bocchi şoktan sararıyor",
        [Locale.Italian]: "Bocchi pallida per lo shock",
        [Locale.Indonesian]: "Bocchi pucat terkejut",
        [Locale.Czech]: "Bocchi bledá šokem",
        [Locale.Japanese]: "青ざめてショックのぼっち",
        [Locale.Korean]: "창백해진 충격 봇치",
        [Locale.ChineseCN]: "波奇震惊脸色苍白",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeftWithBackground],
    width: 1472,
    height: 736,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiPaleShock.png"
                width={736}
                height={736}
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
                    backgroundColor: "#e7e7e5",
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
