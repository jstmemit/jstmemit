import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruCryingLoudly: Template = {
    name: "hucUmaruCryingLoudly",
    displayName: buildLocales("Umaru crying loudly", {
        [Locale.Russian]: "Громко плачущая Умару",
        [Locale.Ukrainian]: "Умару голосно плаче",
        [Locale.Dutch]: "Hard huilende Umaru",
        [Locale.French]: "Umaru pleurant bruyamment",
        [Locale.German]: "Laut weinende Umaru",
        [Locale.Polish]: "Głośno płacząca Umaru",
        [Locale.SpanishES]: "Umaru llorando fuerte",
        [Locale.SpanishLATAM]: "Umaru llorando fuerte",
        [Locale.PortugueseBR]: "Umaru chorando alto",
        [Locale.Turkish]: "Yüksek sesle ağlayan Umaru",
        [Locale.Italian]: "Umaru che piange forte",
        [Locale.Indonesian]: "Umaru menangis keras",
        [Locale.Czech]: "Hlasitě plačící Umaru",
        [Locale.Japanese]: "大泣きするうまる",
        [Locale.Korean]: "오열하는 우마루",
        [Locale.ChineseCN]: "嚎啕大哭的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 900,
    height: 659,
    animationDuration: 5930,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruCryingLoudly.gif"
                width={900}
                height={509}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
