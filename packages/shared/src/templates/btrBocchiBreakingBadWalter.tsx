import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiBreakingBadWalter: Template = {
    name: "btrBocchiBreakingBadWalter",
    displayName: buildLocales("Bocchi Breaking Bad Walter", {
        [Locale.Russian]: "Бокки в образе Уолтера из Breaking Bad",
        [Locale.Ukrainian]: "Боккі в образі Волтера з Breaking Bad",
        [Locale.Dutch]: "Bocchi als Walter uit Breaking Bad",
        [Locale.French]: "Bocchi en Walter de Breaking Bad",
        [Locale.German]: "Bocchi als Walter aus Breaking Bad",
        [Locale.Polish]: "Bocchi jako Walter z Breaking Bad",
        [Locale.SpanishES]: "Bocchi como Walter de Breaking Bad",
        [Locale.SpanishLATAM]: "Bocchi como Walter de Breaking Bad",
        [Locale.PortugueseBR]: "Bocchi como Walter de Breaking Bad",
        [Locale.Turkish]: "Bocchi, Breaking Bad'den Walter olarak",
        [Locale.Italian]: "Bocchi nei panni di Walter di Breaking Bad",
        [Locale.Indonesian]: "Bocchi sebagai Walter dari Breaking Bad",
        [Locale.Czech]: "Bocchi jako Walter z Breaking Bad",
        [Locale.Japanese]: "ブレイキング・バッドのウォルター風ぼっち",
        [Locale.Korean]: "브레이킹 배드 월터 봇치",
        [Locale.ChineseCN]: "波奇扮演绝命毒师沃尔特",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock, Topic.BreakingBad],
    types: [Type.TextTopWithBackground],
    width: 800,
    height: 800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiBreakingBadWalter.png"
                width={800}
                height={650}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                    padding: "15px",
                    backgroundColor: "#dadada",
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
