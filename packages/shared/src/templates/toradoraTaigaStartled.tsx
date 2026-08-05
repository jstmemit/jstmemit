import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaStartled: Template = {
    name: "toradoraTaigaStartled",
    displayName: buildLocales("Taiga startled", {
        [Locale.Russian]: "Испуганная Тайга",
        [Locale.Ukrainian]: "Налякана Тайга",
        [Locale.Dutch]: "Taiga geschrokken",
        [Locale.French]: "Taiga sursautant",
        [Locale.German]: "Taiga erschrocken",
        [Locale.Polish]: "Przestraszona Taiga",
        [Locale.SpanishES]: "Taiga sobresaltada",
        [Locale.SpanishLATAM]: "Taiga asustada",
        [Locale.PortugueseBR]: "Taiga assustada",
        [Locale.Turkish]: "İrkilen Taiga",
        [Locale.Italian]: "Taiga spaventata",
        [Locale.Indonesian]: "Taiga terkejut",
        [Locale.Czech]: "Vylekaná Taiga",
        [Locale.Japanese]: "驚く大河",
        [Locale.Korean]: "깜짝 놀란 타이가",
        [Locale.ChineseCN]: "大河受惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextRightWithBackground],
    width: 1462,
    height: 731,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaStartled.png"
                width={731}
                height={731}
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
                        lineClamp: 6,
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
