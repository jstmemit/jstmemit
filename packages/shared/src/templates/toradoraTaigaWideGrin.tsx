import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaWideGrin: Template = {
    name: "toradoraTaigaWideGrin",
    displayName: buildLocales("Taiga wide grin", {
        [Locale.Russian]: "Широкая ухмылка Тайги",
        [Locale.Ukrainian]: "Широка усмішка Тайги",
        [Locale.Dutch]: "Taiga brede grijns",
        [Locale.French]: "Grand sourire de Taiga",
        [Locale.German]: "Taigas breites Grinsen",
        [Locale.Polish]: "Szeroki uśmiech Taigi",
        [Locale.SpanishES]: "Taiga con gran sonrisa",
        [Locale.SpanishLATAM]: "Taiga con gran sonrisa",
        [Locale.PortugueseBR]: "Taiga com um largo sorriso",
        [Locale.Turkish]: "Taiga geniş sırıtış",
        [Locale.Italian]: "Ampio sorriso di Taiga",
        [Locale.Indonesian]: "Seringai lebar Taiga",
        [Locale.Czech]: "Taigin široký úsměv",
        [Locale.Japanese]: "満面の笑みの大河",
        [Locale.Korean]: "타이가의 환한 미소",
        [Locale.ChineseCN]: "大河大笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextTopWithBackground],
    width: 1078,
    height: 748,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaWideGrin.png"
                width={1078}
                height={598}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: 50,
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
