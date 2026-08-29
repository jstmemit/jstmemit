import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adOsakaWithSoap: Template = {
    name: "adOsakaWithSoap",
    displayName: buildLocales("Osaka with soap", {
        [Locale.Russian]: "Осака с мылом",
        [Locale.Ukrainian]: "Осака з милом",
        [Locale.Dutch]: "Osaka met zeep",
        [Locale.French]: "Osaka avec du savon",
        [Locale.German]: "Osaka mit Seife",
        [Locale.Polish]: "Osaka z mydłem",
        [Locale.SpanishES]: "Osaka con jabón",
        [Locale.SpanishLATAM]: "Osaka con jabón",
        [Locale.PortugueseBR]: "Osaka com sabão",
        [Locale.Turkish]: "Sabunlu Osaka",
        [Locale.Italian]: "Osaka con il sapone",
        [Locale.Indonesian]: "Osaka dengan sabun",
        [Locale.Czech]: "Osaka s mýdlem",
        [Locale.Japanese]: "石鹸を持つ大阪",
        [Locale.Korean]: "비누를 든 오사카",
        [Locale.ChineseCN]: "大阪与肥皂",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 474,
    animationDuration: 4040,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adOsakaWithSoap.gif"
                width={500}
                height={374}
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
