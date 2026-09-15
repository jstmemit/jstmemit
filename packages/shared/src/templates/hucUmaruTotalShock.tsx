import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruTotalShock: Template = {
    name: "hucUmaruTotalShock",
    displayName: buildLocales("Umaru total shock", {
        [Locale.Russian]: "Полный шок Умару",
        [Locale.Ukrainian]: "Повний шок Умару",
        [Locale.Dutch]: "Totale shock van Umaru",
        [Locale.French]: "Choc total d'Umaru",
        [Locale.German]: "Umarus totaler Schock",
        [Locale.Polish]: "Całkowity szok Umaru",
        [Locale.SpanishES]: "Choque total de Umaru",
        [Locale.SpanishLATAM]: "Choque total de Umaru",
        [Locale.PortugueseBR]: "Choque total da Umaru",
        [Locale.Turkish]: "Umaru'nun tam şoku",
        [Locale.Italian]: "Shock totale di Umaru",
        [Locale.Indonesian]: "Kejutan total Umaru",
        [Locale.Czech]: "Úplný šok Umaru",
        [Locale.Japanese]: "完全にショックを受けるうまる",
        [Locale.Korean]: "완전한 충격에 빠진 우마루",
        [Locale.ChineseCN]: "完全震惊的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 387,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruTotalShock.png"
                width={500}
                height={287}
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
