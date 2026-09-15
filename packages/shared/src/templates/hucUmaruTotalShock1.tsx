import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruTotalShock1: Template = {
    name: "hucUmaruTotalShock1",
    displayName: buildLocales("Umaru total shock 1", {
        [Locale.Russian]: "Полный шок Умару 1",
        [Locale.Ukrainian]: "Повний шок Умару 1",
        [Locale.Dutch]: "Totale shock van Umaru 1",
        [Locale.French]: "Choc total d'Umaru 1",
        [Locale.German]: "Umarus totaler Schock 1",
        [Locale.Polish]: "Całkowity szok Umaru 1",
        [Locale.SpanishES]: "Choque total de Umaru 1",
        [Locale.SpanishLATAM]: "Choque total de Umaru 1",
        [Locale.PortugueseBR]: "Choque total da Umaru 1",
        [Locale.Turkish]: "Umaru'nun tam şoku 1",
        [Locale.Italian]: "Shock totale di Umaru 1",
        [Locale.Indonesian]: "Kejutan total Umaru 1",
        [Locale.Czech]: "Úplný šok Umaru 1",
        [Locale.Japanese]: "完全にショックを受けるうまる 1",
        [Locale.Korean]: "완전한 충격에 빠진 우마루 1",
        [Locale.ChineseCN]: "完全震惊的小埋 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground],
    width: 540,
    height: 404,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruTotalShock1.png"
                width={540}
                height={304}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
