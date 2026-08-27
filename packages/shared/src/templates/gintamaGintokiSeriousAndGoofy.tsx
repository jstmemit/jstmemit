import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiSeriousAndGoofy: Template = {
    name: "gintamaGintokiSeriousAndGoofy",
    displayName: buildLocales("Serious and goofy Gintoki", {
        [Locale.Russian]: "Серьезный и дурашливый Гинтоки",
        [Locale.Ukrainian]: "Серйозний і кумедний Гінтокі",
        [Locale.Dutch]: "Serieuze en dwaze Gintoki",
        [Locale.French]: "Gintoki sérieux et loufoque",
        [Locale.German]: "Ernster und alberner Gintoki",
        [Locale.Polish]: "Poważny i głupkowaty Gintoki",
        [Locale.SpanishES]: "Gintoki serio y gracioso",
        [Locale.SpanishLATAM]: "Gintoki serio y chistoso",
        [Locale.PortugueseBR]: "Gintoki sério e bobo",
        [Locale.Turkish]: "Ciddi ve şapşal Gintoki",
        [Locale.Italian]: "Gintoki serio e buffo",
        [Locale.Indonesian]: "Gintoki serius dan konyol",
        [Locale.Czech]: "Vážný a praštěný Gintoki",
        [Locale.Japanese]: "シリアスとギャグの銀時",
        [Locale.Korean]: "진지하고 우스꽝스러운 긴토키",
        [Locale.ChineseCN]: "严肃与搞笑的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 360,
    animationDuration: 4120,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiSeriousAndGoofy.gif"
                width={500}
                height={270}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
                        fontFamily: "Comic Sans MS",
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
