import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ucwthoUzakiYelling: Template = {
    name: "ucwthoUzakiYelling",
    displayName: buildLocales("Uzaki yelling", {
        [Locale.Russian]: "Кричащая Узаки",
        [Locale.Ukrainian]: "Узакі, що кричить",
        [Locale.Dutch]: "Schreeuwende Uzaki",
        [Locale.French]: "Uzaki qui crie",
        [Locale.German]: "Schreiende Uzaki",
        [Locale.Polish]: "Krzycząca Uzaki",
        [Locale.SpanishES]: "Uzaki gritando",
        [Locale.SpanishLATAM]: "Uzaki gritando",
        [Locale.PortugueseBR]: "Uzaki gritando",
        [Locale.Turkish]: "Bağıran Uzaki",
        [Locale.Italian]: "Uzaki che urla",
        [Locale.Indonesian]: "Uzaki berteriak",
        [Locale.Czech]: "Křičící Uzaki",
        [Locale.Japanese]: "叫ぶ宇崎",
        [Locale.Korean]: "소리치는 우자키",
        [Locale.ChineseCN]: "大喊的宇崎",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UzakiChanWantsToHangOut],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 954,
    height: 498,
    animationDuration: 1450,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ucwthoUzakiYelling.gif"
                width={477}
                height={498}
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
                        lineClamp: 7,
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
