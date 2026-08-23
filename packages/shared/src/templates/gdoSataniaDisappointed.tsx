import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoSataniaDisappointed: Template = {
    name: "gdoSataniaDisappointed",
    displayName: buildLocales("Satania disappointed", {
        [Locale.Russian]: "Разочарованная Сатания",
        [Locale.Ukrainian]: "Розчарована Сатанія",
        [Locale.Dutch]: "Teleurgestelde Satania",
        [Locale.French]: "Satania déçue",
        [Locale.German]: "Enttäuschte Satania",
        [Locale.Polish]: "Rozczarowana Satania",
        [Locale.SpanishES]: "Satania decepcionada",
        [Locale.SpanishLATAM]: "Satania decepcionada",
        [Locale.PortugueseBR]: "Satania decepcionada",
        [Locale.Turkish]: "Hayal kırıklığına uğramış Satania",
        [Locale.Italian]: "Satania delusa",
        [Locale.Indonesian]: "Satania kecewa",
        [Locale.Czech]: "Zklamaná Satania",
        [Locale.Japanese]: "がっかりするサターニャ",
        [Locale.Korean]: "실망한 사타냐",
        [Locale.ChineseCN]: "失望的萨塔妮亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextRightWithBackground],
    width: 2034,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 20 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoSataniaDisappointed.png"
                width={1017}
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
                        fontSize: 90,
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
