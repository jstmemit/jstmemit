import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiShocked1: Template = {
    name: "gintamaGintokiShocked1",
    displayName: buildLocales("Shocked Gintoki 1", {
        [Locale.Russian]: "Шокированный Гинтоки 1",
        [Locale.Ukrainian]: "Шокований Гінтокі 1",
        [Locale.Dutch]: "Geshockeerde Gintoki 1",
        [Locale.French]: "Gintoki choqué 1",
        [Locale.German]: "Geschockter Gintoki 1",
        [Locale.Polish]: "Zszokowany Gintoki 1",
        [Locale.SpanishES]: "Gintoki en shock 1",
        [Locale.SpanishLATAM]: "Gintoki en shock 1",
        [Locale.PortugueseBR]: "Gintoki chocado 1",
        [Locale.Turkish]: "Şok olmuş Gintoki 1",
        [Locale.Italian]: "Gintoki scioccato 1",
        [Locale.Indonesian]: "Gintoki terkejut 1",
        [Locale.Czech]: "Šokovaný Gintoki 1",
        [Locale.Japanese]: "ショックを受ける銀時 1",
        [Locale.Korean]: "충격받은 긴토키 1",
        [Locale.ChineseCN]: "震惊的银时 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 474,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiShocked1.png"
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
