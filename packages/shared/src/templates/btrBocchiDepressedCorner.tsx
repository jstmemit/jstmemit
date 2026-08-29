import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiDepressedCorner: Template = {
    name: "btrBocchiDepressedCorner",
    displayName: buildLocales("Bocchi depressed corner", {
        [Locale.Russian]: "Бокки грустит в углу",
        [Locale.Ukrainian]: "Боккі сумує в кутку",
        [Locale.Dutch]: "Bocchi in de depressiehoek",
        [Locale.French]: "Bocchi déprimée dans son coin",
        [Locale.German]: "Bocchi in der Depri-Ecke",
        [Locale.Polish]: "Bocchi w depresyjnym kącie",
        [Locale.SpanishES]: "Bocchi deprimida en el rincón",
        [Locale.SpanishLATAM]: "Bocchi deprimida en el rincón",
        [Locale.PortugueseBR]: "Bocchi deprimida no canto",
        [Locale.Turkish]: "Bocchi köşede çökmüş",
        [Locale.Italian]: "Bocchi depressa nell'angolo",
        [Locale.Indonesian]: "Bocchi murung di sudut",
        [Locale.Czech]: "Bocchi sklíčená v koutě",
        [Locale.Japanese]: "体育座りで落ち込むぼっち",
        [Locale.Korean]: "구석에서 우울한 봇치",
        [Locale.ChineseCN]: "波奇蹲角落沮丧",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 1920,
    height: 1430,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDepressedCorner.png"
                width={1920}
                height={1080}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "30px",
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
