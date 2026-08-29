import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiRealizationStages: Template = {
    name: "gintamaGintokiRealizationStages",
    displayName: buildLocales("Gintoki realization stages", {
        [Locale.Russian]: "Стадии осознания Гинтоки",
        [Locale.Ukrainian]: "Стадії усвідомлення Гінтокі",
        [Locale.Dutch]: "Gintoki realisatie stadia",
        [Locale.French]: "Étapes de réalisation de Gintoki",
        [Locale.German]: "Gintokis Phasen der Erkenntnis",
        [Locale.Polish]: "Etapy uświadamiania sobie przez Gintokiego",
        [Locale.SpanishES]: "Fases de realización de Gintoki",
        [Locale.SpanishLATAM]: "Fases de realización de Gintoki",
        [Locale.PortugueseBR]: "Estágios de realização do Gintoki",
        [Locale.Turkish]: "Gintoki idrak aşamaları",
        [Locale.Italian]: "Fasi di realizzazione di Gintoki",
        [Locale.Indonesian]: "Tahap kesadaran Gintoki",
        [Locale.Czech]: "Fáze uvědomění Gintokiho",
        [Locale.Japanese]: "銀時の気づきの段階",
        [Locale.Korean]: "긴토키 깨달음의 단계",
        [Locale.ChineseCN]: "银时认知的几个阶段",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.ThreeOption, Type.TextRightWithBackground],
    width: 1084,
    height: 1080,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
        { id: 2, description: "third option", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiRealizationStages.png"
                width={542}
                height={1080}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "33%",
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
                        lineClamp: 4,
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
                    top: "33%",
                    width: "50%",
                    height: "34%",
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
                        lineClamp: 4,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "33%",
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
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
