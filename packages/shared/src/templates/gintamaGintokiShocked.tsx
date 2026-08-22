import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiShocked: Template = {
    name: "gintamaGintokiShocked",
    displayName: buildLocales("Shocked Gintoki", {
        [Locale.Russian]: "Шокированный Гинтоки",
        [Locale.Ukrainian]: "Шокований Гінтокі",
        [Locale.Dutch]: "Geshockeerde Gintoki",
        [Locale.French]: "Gintoki choqué",
        [Locale.German]: "Geschockter Gintoki",
        [Locale.Polish]: "Zszokowany Gintoki",
        [Locale.SpanishES]: "Gintoki en shock",
        [Locale.SpanishLATAM]: "Gintoki en shock",
        [Locale.PortugueseBR]: "Gintoki chocado",
        [Locale.Turkish]: "Şok olmuş Gintoki",
        [Locale.Italian]: "Gintoki scioccato",
        [Locale.Indonesian]: "Gintoki terkejut",
        [Locale.Czech]: "Šokovaný Gintoki",
        [Locale.Japanese]: "ショックを受ける銀時",
        [Locale.Korean]: "충격받은 긴토키",
        [Locale.ChineseCN]: "震惊的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 464,
    animationDuration: 2610,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiShocked.gif"
                width={500}
                height={374}
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
                        fontSize: 30,
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
