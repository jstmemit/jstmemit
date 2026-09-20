import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const eightySixHenriettaAngry1: Template = {
    name: "eightySixHenriettaAngry1",
    displayName: buildLocales("Henrietta angry 1", {
        [Locale.Russian]: "Злая Генриетта 1",
        [Locale.Ukrainian]: "Зла Генрієтта 1",
        [Locale.Dutch]: "Boze Henrietta 1",
        [Locale.French]: "Henrietta en colère 1",
        [Locale.German]: "Wütende Henrietta 1",
        [Locale.Polish]: "Zła Henrietta 1",
        [Locale.SpanishES]: "Henrietta enfadada 1",
        [Locale.SpanishLATAM]: "Henrietta enojada 1",
        [Locale.PortugueseBR]: "Henrietta irritada 1",
        [Locale.Turkish]: "Kızgın Henrietta 1",
        [Locale.Italian]: "Henrietta arrabbiata 1",
        [Locale.Indonesian]: "Henrietta marah 1",
        [Locale.Czech]: "Naštvaná Henrietta 1",
        [Locale.Japanese]: "怒るヘンリエッタ 1",
        [Locale.Korean]: "화난 헨리에타 1",
        [Locale.ChineseCN]: "愤怒的亨丽埃塔 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.EightySix],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 468,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/eightySixHenriettaAngry1.png"
                width={500}
                height={368}
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
