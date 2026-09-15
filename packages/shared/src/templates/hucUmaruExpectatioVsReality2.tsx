import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruExpectationVsReality2: Template = {
    name: "hucUmaruExpectationVsReality2",
    displayName: buildLocales("Umaru expectation vs reality 2", {
        [Locale.Russian]: "Ожидание и реальность Умару 2",
        [Locale.Ukrainian]: "Очікування та реальність Умару 2",
        [Locale.Dutch]: "Umaru verwachting vs realiteit 2",
        [Locale.French]: "Attente vs réalité d'Umaru 2",
        [Locale.German]: "Umaru Erwartung vs Realität 2",
        [Locale.Polish]: "Oczekiwania vs rzeczywistość Umaru 2",
        [Locale.SpanishES]: "Expectativa vs realidad de Umaru 2",
        [Locale.SpanishLATAM]: "Expectativa vs realidad de Umaru 2",
        [Locale.PortugueseBR]: "Expectativa vs realidade da Umaru 2",
        [Locale.Turkish]: "Umaru beklenti vs gerçeklik 2",
        [Locale.Italian]: "Aspettativa vs realtà di Umaru 2",
        [Locale.Indonesian]: "Ekspektasi vs realita Umaru 2",
        [Locale.Czech]: "Očekávání vs realita Umaru 2",
        [Locale.Japanese]: "うまるの理想と現実 2",
        [Locale.Korean]: "우마루의 이상과 현실 2",
        [Locale.ChineseCN]: "小埋的理想与现实 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 1000,
    height: 564,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 6 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 6 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruSkepticalIndifference.png"
                width={500}
                height={287}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruTotalShock.png"
                width={500}
                height={287}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
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
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
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
