import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaShocked: Template = {
    name: "gdoSataniaShocked",
    displayName: buildLocales("Satania shocked", {
        [Locale.Russian]: "Сатания в шоке",
        [Locale.Ukrainian]: "Сатанія в шоці",
        [Locale.Dutch]: "Satania in shock",
        [Locale.French]: "Satania choquée",
        [Locale.German]: "Satania geschockt",
        [Locale.Polish]: "Satania w szoku",
        [Locale.SpanishES]: "Satania en shock",
        [Locale.SpanishLATAM]: "Satania en shock",
        [Locale.PortugueseBR]: "Satania chocada",
        [Locale.Turkish]: "Satania şokta",
        [Locale.Italian]: "Satania scioccata",
        [Locale.Indonesian]: "Satania terkejut",
        [Locale.Czech]: "Satania v šoku",
        [Locale.Japanese]: "ショックを受けるサターニャ",
        [Locale.Korean]: "충격받은 사타냐",
        [Locale.ChineseCN]: "萨塔妮亚震惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextRightWithBackground],
    width: 1800,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaShocked.png"
                width={900}
                height={900}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
                        lineClamp: 8,
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
