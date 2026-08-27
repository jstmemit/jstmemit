import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ceRebeccaDrake: Template = {
    name: "ceRebeccaDrake",
    displayName: buildLocales("Rebecca drake", {
        [Locale.Russian]: "Ребекка в формате Дрейка",
        [Locale.Ukrainian]: "Ребекка у форматі Дрейка",
        [Locale.Dutch]: "Rebecca drake-formaat",
        [Locale.French]: "Rebecca format Drake",
        [Locale.German]: "Rebecca im Drake-Format",
        [Locale.Polish]: "Rebecca w formacie Drake'a",
        [Locale.SpanishES]: "Rebecca formato Drake",
        [Locale.SpanishLATAM]: "Rebecca formato Drake",
        [Locale.PortugueseBR]: "Rebecca formato Drake",
        [Locale.Turkish]: "Rebecca Drake formatı",
        [Locale.Italian]: "Rebecca formato Drake",
        [Locale.Indonesian]: "Rebecca format Drake",
        [Locale.Czech]: "Rebecca ve formátu Drake",
        [Locale.Japanese]: "ドレイク形式のレベッカ",
        [Locale.Korean]: "드레이크 포맷 레베카",
        [Locale.ChineseCN]: "丽贝卡Drake表情包格式",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 592,
    height: 601,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 10 },
        { id: 1, description: "second option", minLength: 1, maxLength: 10 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceRebeccaDrake.png"
                width={296}
                height={601}
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
                        lineClamp: 6,
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
