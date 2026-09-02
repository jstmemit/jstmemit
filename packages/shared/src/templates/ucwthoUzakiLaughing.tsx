import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ucwthoUzakiLaughing: Template = {
    name: "ucwthoUzakiLaughing",
    displayName: buildLocales("Uzaki laughing", {
        [Locale.Russian]: "Смеющаяся Узаки",
        [Locale.Ukrainian]: "Узакі, що сміється",
        [Locale.Dutch]: "Lachende Uzaki",
        [Locale.French]: "Uzaki qui rit",
        [Locale.German]: "Lachende Uzaki",
        [Locale.Polish]: "Śmiejąca się Uzaki",
        [Locale.SpanishES]: "Uzaki riendo",
        [Locale.SpanishLATAM]: "Uzaki riendo",
        [Locale.PortugueseBR]: "Uzaki rindo",
        [Locale.Turkish]: "Gülen Uzaki",
        [Locale.Italian]: "Uzaki che ride",
        [Locale.Indonesian]: "Uzaki tertawa",
        [Locale.Czech]: "Smějící se Uzaki",
        [Locale.Japanese]: "笑う宇崎",
        [Locale.Korean]: "웃는 우자키",
        [Locale.ChineseCN]: "大笑的宇崎",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UzakiChanWantsToHangOut],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 800,
    height: 600,
    animationDuration: 2300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ucwthoUzakiLaughing.gif"
                width={800}
                height={450}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
