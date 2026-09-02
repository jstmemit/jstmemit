import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaDesperateGrip: Template = {
    name: "sfAnyaDesperateGrip",
    displayName: buildLocales("Anya desperate grip", {
        [Locale.Russian]: "Отчаянная хватка Ани",
        [Locale.Ukrainian]: "Відчайдушна хватка Ані",
        [Locale.Dutch]: "Wanhopige greep van Anya",
        [Locale.French]: "Prise désespérée d'Anya",
        [Locale.German]: "Anyas verzweifelter Griff",
        [Locale.Polish]: "Rozpaczliwy uścisk Anyi",
        [Locale.SpanishES]: "Agarre desesperado de Anya",
        [Locale.SpanishLATAM]: "Agarre desesperado de Anya",
        [Locale.PortugueseBR]: "Aperto desesperado da Anya",
        [Locale.Turkish]: "Anya'nın çaresiz tutuşu",
        [Locale.Italian]: "Presa disperata di Anya",
        [Locale.Indonesian]: "Pegangan putus asa Anya",
        [Locale.Czech]: "Anyino zoufalé sevření",
        [Locale.Japanese]: "必死にしがみつくアーニャ",
        [Locale.Korean]: "필사적으로 매달린 아냐",
        [Locale.ChineseCN]: "拼命抓紧的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 600,
    height: 458,
    animationDuration: 3240,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaDesperateGrip.gif"
                width={600}
                height={338}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "120px",
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
