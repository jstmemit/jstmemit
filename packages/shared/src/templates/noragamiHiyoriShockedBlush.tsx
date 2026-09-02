import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiHiyoriShockedBlush: Template = {
    name: "noragamiHiyoriShockedBlush",
    displayName: buildLocales("Hiyori shocked blush", {
        [Locale.Russian]: "Шокированная Хиёри краснеет",
        [Locale.Ukrainian]: "Шокована Хійорі червоніє",
        [Locale.Dutch]: "Geschokte blozende Hiyori",
        [Locale.French]: "Hiyori choquée et rougissante",
        [Locale.German]: "Geschockte errötende Hiyori",
        [Locale.Polish]: "Zszokowana i zarumieniona Hiyori",
        [Locale.SpanishES]: "Hiyori en shock y sonrojada",
        [Locale.SpanishLATAM]: "Hiyori en shock y sonrojada",
        [Locale.PortugueseBR]: "Hiyori chocada e corada",
        [Locale.Turkish]: "Şok olmuş ve kızaran Hiyori",
        [Locale.Italian]: "Hiyori scioccata e arrossita",
        [Locale.Indonesian]: "Hiyori terkejut dan tersipu",
        [Locale.Czech]: "Šokovaná a červenající se Hiyori",
        [Locale.Japanese]: "ショックを受けて赤面するひより",
        [Locale.Korean]: "충격받아 얼굴을 붉히는 히요리",
        [Locale.ChineseCN]: "震惊脸红的日和",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 892,
    height: 498,
    animationDuration: 2860,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/noragamiHiyoriShockedBlush.gif"
                width={446}
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
                    padding: "20px",
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
