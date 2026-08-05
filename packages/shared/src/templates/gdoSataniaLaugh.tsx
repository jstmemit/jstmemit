import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoSataniaLaugh: Template = {
    name: "gdoSataniaLaugh",
    displayName: buildLocales("Satania laugh", {
        [Locale.Russian]: "Смех Сатании",
        [Locale.Ukrainian]: "Сміх Сатанії",
        [Locale.Dutch]: "Satania lach",
        [Locale.French]: "Rire de Satania",
        [Locale.German]: "Satania Lache",
        [Locale.Polish]: "Śmiech Satanii",
        [Locale.SpanishES]: "Risa de Satania",
        [Locale.SpanishLATAM]: "Risa de Satania",
        [Locale.PortugueseBR]: "Risada da Satania",
        [Locale.Turkish]: "Satania gülüşü",
        [Locale.Italian]: "Risata di Satania",
        [Locale.Indonesian]: "Tawa Satania",
        [Locale.Czech]: "Smích Satanie",
        [Locale.Japanese]: "笑うサターニャ",
        [Locale.Korean]: "사타냐 웃음",
        [Locale.ChineseCN]: "萨塔妮亚大笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground],
    width: 1200,
    height: 875,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaLaugh.png"
                width={1200}
                height={675}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "200px",
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
                        lineClamp: 2,
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
