import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaGiggling: Template = {
    name: "kaguyasamaChikaGiggling",
    displayName: buildLocales("Giggling Chika", {
        [Locale.Russian]: "Хихикающая Чика",
        [Locale.Ukrainian]: "Чіка хихикає",
        [Locale.Dutch]: "Giechelende Chika",
        [Locale.French]: "Chika qui glousse",
        [Locale.German]: "Kichernde Chika",
        [Locale.Polish]: "Chichocząca Chika",
        [Locale.SpanishES]: "Chika riéndose",
        [Locale.SpanishLATAM]: "Chika riéndose",
        [Locale.PortugueseBR]: "Chika dando risadinha",
        [Locale.Turkish]: "Kıkırdayan Chika",
        [Locale.Italian]: "Chika che ridacchia",
        [Locale.Indonesian]: "Chika terkikik",
        [Locale.Czech]: "Chichotající se Chika",
        [Locale.Japanese]: "クスクス笑うチカ",
        [Locale.Korean]: "킥킥거리는 치카",
        [Locale.ChineseCN]: "偷笑的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 527,
    animationDuration: 1650,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaGiggling.gif"
                width={498}
                height={437}
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
