import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiShocked2: Template = {
    name: "gintamaGintokiShocked2",
    displayName: buildLocales("Shocked Gintoki 2", {
        [Locale.Russian]: "Шокированный Гинтоки 2",
        [Locale.Ukrainian]: "Шокований Гінтокі 2",
        [Locale.Dutch]: "Geshockeerde Gintoki 2",
        [Locale.French]: "Gintoki choqué 2",
        [Locale.German]: "Geschockter Gintoki 2",
        [Locale.Polish]: "Zszokowany Gintoki 2",
        [Locale.SpanishES]: "Gintoki en shock 2",
        [Locale.SpanishLATAM]: "Gintoki en shock 2",
        [Locale.PortugueseBR]: "Gintoki chocado 2",
        [Locale.Turkish]: "Şok olmuş Gintoki 2",
        [Locale.Italian]: "Gintoki scioccato 2",
        [Locale.Indonesian]: "Gintoki terkejut 2",
        [Locale.Czech]: "Šokovaný Gintoki 2",
        [Locale.Japanese]: "ショックを受ける銀時 2",
        [Locale.Korean]: "충격받은 긴토키 2",
        [Locale.ChineseCN]: "震惊的银时 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 1000,
    height: 748,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 9 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 9 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiBruh.png"
                width={500}
                height={374}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiShocked1.png"
                width={500}
                height={374}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
