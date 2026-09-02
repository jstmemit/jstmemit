import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ceRebeccaCalmVsAngry: Template = {
    name: "ceRebeccaCalmVsAngry",
    displayName: buildLocales("Rebecca calm vs angry", {
        [Locale.Russian]: "Ребекка спокойна vs зла",
        [Locale.Ukrainian]: "Ребекка спокійна vs зла",
        [Locale.Dutch]: "Rebecca kalm vs boos",
        [Locale.French]: "Rebecca calme vs en colère",
        [Locale.German]: "Rebecca ruhig vs. wütend",
        [Locale.Polish]: "Rebecca spokojna vs zła",
        [Locale.SpanishES]: "Rebecca tranquila vs enfadada",
        [Locale.SpanishLATAM]: "Rebecca tranquila vs enojada",
        [Locale.PortugueseBR]: "Rebecca calma vs brava",
        [Locale.Turkish]: "Rebecca sakin vs kızgın",
        [Locale.Italian]: "Rebecca calma vs arrabbiata",
        [Locale.Indonesian]: "Rebecca tenang vs marah",
        [Locale.Czech]: "Rebecca klidná vs naštvaná",
        [Locale.Japanese]: "冷静なレベッカ vs 怒るレベッカ",
        [Locale.Korean]: "차분한 레베카 vs 화난 레베카",
        [Locale.ChineseCN]: "丽贝卡冷静vs愤怒",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 928,
    height: 951,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 12 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceRebeccaCalmVsAngry.png"
                width={464}
                height={951}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
